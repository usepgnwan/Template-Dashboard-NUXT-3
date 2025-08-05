export const useSideBarData = () => {
    if (process.server) return { hbar: ref(false), wbar: ref('16rem') }

    const hbar = useState('close', () => false)
    const wbar = useState('wbar', () => '16rem')

    return { hbar, wbar }
}