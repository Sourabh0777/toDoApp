// components/Nav.js
"use client"
import { signIn, signOut, useSession } from "next-auth/react";

const Nav = () => {
    const { data: session } = useSession();

    return (
        <nav style={{ backgroundColor: "#333", padding: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
                <span style={{ color: "#fff", fontSize: "1.5rem", fontWeight: "bold" }}>To Do List</span>
            </div>
            <div>
                {!session ? (
                    <button
                        onClick={() => signIn()}
                        style={{ backgroundColor: "#ff4f4f", color: "#fff", fontWeight: "bold", padding: "0.5rem 1rem", borderRadius: "0.25rem", border: "none", cursor: "pointer", transition: "background-color 0.3s ease" }}
                    >
                        Sign In
                    </button>
                ) : (
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <span style={{ color: "#fff", marginRight: "0.5rem" }}>{session?.user?.name}</span>
                        <button
                            onClick={() => signOut()}
                            style={{ backgroundColor: "#ff4f4f", color: "#fff", fontWeight: "bold", padding: "0.5rem 1rem", borderRadius: "0.25rem", border: "none", cursor: "pointer", transition: "background-color 0.3s ease" }}
                        >
                            Sign Out
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Nav;
