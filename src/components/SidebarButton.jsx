import atoms from "../styles/atoms.module.scss"

export default function SidebarButton({ toggleSidebar, tablet }) {
    return <button
        className={tablet ? atoms.tabletSidebarButton : atoms.sidebarButton}
        aria-label="show sidebar"
        onClick={toggleSidebar}
    >
        <div aria-hidden />
    </button>
}