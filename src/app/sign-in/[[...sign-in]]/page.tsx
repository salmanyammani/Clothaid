import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex min-h-svh  items-center justify-center bg-muted p-6 pt-8 md:p-10">
      {/* <div className="w-full mx-auto max-w-sm md:max-w-3xl"> */}
        <SignIn />
      {/* </div> */}
    </div>
  )
}