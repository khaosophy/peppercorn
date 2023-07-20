import TextField from '@/components/TextField';
import Button from '@/components/Button';

export default function SubscribeForm() {
  return (
    <form
      action="https://khaosophy.us21.list-manage.com/subscribe/post"
      className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
    >
      <input type="hidden" name="u" value="d389e152fea2515ab9fcd322a" />
      <input type="hidden" name="id" value="aa61bd06fd" />
      <TextField
        className="col-span-full"
        label="Email address"
        id="email_MERGE0"
        name="MERGE0"
        type="email"
        autoComplete="email"
        required
      />
      <div className="col-span-full">
        <Button
          type="submit"
          variant="solid"
          color="blue"
          className="w-full"
        >
          Get Notified
        </Button>
      </div>
    </form>
  )
}