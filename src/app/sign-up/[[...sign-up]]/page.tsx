import { SignUp } from '@clerk/nextjs'

export default function Page() {
    return (
        <div className="flex min-h-svh  items-center justify-center bg-muted p-6 pt-8 md:p-20">
            <SignUp />
        </div>
    )
}