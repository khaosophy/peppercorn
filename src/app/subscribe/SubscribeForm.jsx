import TextField from '@/components/TextField';
import Button from '@/components/Button';

export default function SubscribeForm() {
  return (
    <form
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
      >
        <TextField
          className="col-span-full"
          label="Email address"
          id="email"
          name="email"
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