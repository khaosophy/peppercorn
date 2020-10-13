import Link from 'next/link';
import Layout from '../components/Layout';
import { useState } from 'react';

export default function Home() {
  return (
    <Layout title="Home">
      <h1>Hello World</h1>
      <ul>
        <li>
          <Link href="/recipes">
            <a>Recipes</a>
          </Link>
        </li>
      </ul>
      {/* todo: display recipes */}
      {/* <ClassList /> */}
      {/* <HookList /> */}
    </Layout>
  )
}

function HookList() {
  const [list, setList] = useState([
    {id: 1241, text: 'hook test'},
    {id: 1252, text: 'another'},
    {id: 1123, text: 'MORE'},
  ]);
  const [input, setInput] = useState('');

  const addItem = (event) => {
    event.preventDefault();
    setList([...list, {id: Date.now(), text: input}]);
    setInput('');
  }

  const deleteItem = (event, key) => {
    const newList = [...list].filter(item => item.id !== key);
    setList(newList);
  }

  const handleChange = (event, key) => {
    const newList = JSON.parse(JSON.stringify(list));
    newList.find(item => item.id === key).text = event.target.value;
    setList( newList );
  }

  return (
    <div>
      <form onSubmit={addItem}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      </form>

      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <input type="text" value={item.text} onChange={(e) => handleChange(e, item.id)} />
            <button onClick={(e) => deleteItem(e, item.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

class ClassList extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
        {id: 1241, text: 'class test'},
        {id: 1252, text: 'another'},
        {id: 1123, text: 'MORE'},
      ],
      input: '',
    }
    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addItem(event) {
    event.preventDefault();
    const newItem = {id: Date.now(), text: this.state.input}
    this.setState({
      list: [...this.state.list, newItem],
      input: '',
    });
  }

  deleteItem(event, key) {
    const list = [...this.state.list].filter(item => item.id !== key);
    this.setState({ list });
  }

  handleChange(event, key) {
    const newList = JSON.parse(JSON.stringify(this.state.list));
    newList.find(item => item.id === key).text = event.target.value;
    this.setState({ list: newList });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addItem}>
          <input type="text" value={this.state.input} onChange={(e) => this.setState({ input: e.target.value })} />
        </form>

        <ul>
          {this.state.list.map((item) => (
            <li key={item.id}>
              <input type="text" value={item.text} onChange={(e) => this.handleChange(e, item.id)} />
              <button onClick={(e) => this.deleteItem(e, item.id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}