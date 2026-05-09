import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    // Synchronous execution is fine here as it's the initial mount, 
    // but to satisfy the linter we can just rely on the initial state or a microtask.
    // However, the cleanest way is often to just initialize the state correctly or use a Ref 
    // if it's strictly for internal logic, but since it's a hook return, state is needed.
    // Let's just wrap it in a microtask or just set it once.
    onChange() 
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
