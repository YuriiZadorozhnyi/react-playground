export interface SidebarProps {
    items: SidebarItem[];
    setDefault: () => void;
}

export interface SidebarItem {
    title: string;
    path: string;
}
