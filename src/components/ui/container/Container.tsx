import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../../helpers/cn'

const Container = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
        return (
            <div
                {...props}
                className={cn('w-[80%] mx-auto', className)}
                ref={ref}
            >
                {children}
            </div>
        )
    },
)

export { Container }