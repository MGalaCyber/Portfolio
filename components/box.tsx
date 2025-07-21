import clsx from "clsx"
import type { PropsWithChildren } from "react"

export async function WaitlistWrapper({ children }: PropsWithChildren) {
    return (
        <div
            className={clsx(
                "w-full mx-auto max-w-[380px] flex flex-col justify-center items-center bg-gray-950/85 border border-gray-600/50 pb-0 overflow-hidden rounded-2xl",
                "shadow-[0px_170px_48px_0px_rgba(18,_18,_19,_0.00),_0px_109px_44px_0px_rgba(18,_18,_19,_0.01),_0px_61px_37px_0px_rgba(18,_18,_19,_0.05),_0px_27px_27px_0px_rgba(18,_18,_19,_0.09),_0px_7px_15px_0px_rgba(18,_18,_19,_0.10)]",
            )}
        >
            <div className="flex flex-col items-center gap-3 flex-1 text-center w-full p-6 pb-3">
                <div className="flex flex-col gap-4 w-full">{children}</div>
            </div>
            <footer className="flex justify-center items-center w-full self-stretch px-6 py-2 text-sm bg-gray-300/[.07] overflow-hidden">
            </footer>
        </div>
    )
}