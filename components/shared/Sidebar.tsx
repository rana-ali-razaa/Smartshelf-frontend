"use client";

import {
    PanelGroup,
    Panel,
    PanelResizeHandle,
} from "react-resizable-panels";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Construction, HomeIcon, Menu, MessageCircle, Moon, Shield, Sun } from "lucide-react";
import Link from "next/link";

export default function ResizableSidebarLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [collapsed, setCollapsed] = useState(false);
    const [defaultSize, setDefaultSize] = useState(20);
    const [size, setSize] = useState(0);
    const { theme, setTheme } = useTheme();

    // Load saved width
    useEffect(() => {
        const saved = localStorage.getItem("sidebar-width");
        if (saved) setDefaultSize(Number(saved));
    }, []);

    const handleResize = (size: number) => {
        localStorage.setItem("sidebar-width", String(size));
        setSize(size)
    };

    const routes: Array<{ name: string, link: string, icon: React.ReactNode }> = [
        {
            icon: <HomeIcon />,
            link: "/",
            name: "Home",
        },
        {
            icon: <Construction />,
            link: "/lib/upload",
            name: "Upload Book",
        },
        {
            icon: <Shield />,
            link: "/auth/login",
            name: "Authentication",
        },
        {
            icon: <MessageCircle />,
            link: "/chat",
            name: "Chat",
        },
    ]

    return (
        <div className="h-screen">
            <PanelGroup direction="horizontal">
                {!collapsed && (
                    <Panel
                        defaultSize={defaultSize}
                        minSize={4}
                        maxSize={35}
                        onResize={handleResize}
                        className="bg-white dark:bg-primary-foreground border-r"
                    >
                        <div className="h-full flex flex-col">
                            <div className="border-b dark:border-gray-800 p-2">
                                <Button
                                    variant="ghost"
                                    className="text-sm"
                                    onClick={() => setCollapsed(true)}
                                >
                                    <Menu />
                                </Button>
                            </div>
                            <div className="">
                                <div className=" p-2 text-sm">
                                    {routes.map((e) => (
                                        <SidebarItem
                                            key={e.name}
                                            icon={e.icon}
                                            link={e.link}
                                            name={e.name}
                                            size={size}
                                        />
                                    ))
                                    }
                                </div>
                            </div>
                        </div>
                    </Panel>
                )}

                {!collapsed && (
                    <PanelResizeHandle className="w-1 bg-accent/40 transition cursor-ew-resize" />
                )}

                <Panel className="bg-accent">
                    <div className="h-full flex flex-col">
                        {collapsed && (
                            <div className="p-2 border-b dark:border-gray-800 flex justify-between">
                                <Button
                                    variant="ghost"
                                    className="text-sm"
                                    onClick={() => setCollapsed(false)}
                                >
                                    <Menu />
                                </Button>

                                <div className="p-2">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                        className="rounded-md"
                                    >
                                        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                        <span className="sr-only">Toggle theme</span>
                                    </Button>
                                </div>
                            </div>
                        )}
                        <div className="flex-1 overflow-y-auto p-4">{children}</div>
                    </div>
                </Panel>
            </PanelGroup>
        </div>
    );
}

const SidebarItem = ({ size, icon, link, name }: { size: number, name: string, link: string, icon: React.ReactNode }) => {
    return <>
        <Link href={link} className="p-2 hover:bg-gray-100 dark:hover:bg-accent/50 rounded cursor-pointer flex items-center gap-3">
            {icon}
            {size > 10 && <p className="capitalize"> {name}</p>}
        </Link>
    </>
}