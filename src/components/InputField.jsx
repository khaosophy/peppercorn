export default function InputField(props) {
    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                type={props.type}
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                required={props.required}
            />
        </div>
    );
}