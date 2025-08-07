import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CustomerProtected = ({ compo }) => {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        const style = document.createElement("style");
        style.innerHTML = `
            @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-20px); }
            }
            
            @keyframes sparkle {
                0% { opacity: 0.3; transform: scale(0.8); }
                50% { opacity: 1; transform: scale(1.1); }
                100% { opacity: 0.3; transform: scale(0.8); }
            }
        `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    if (user) return <>{compo}</>;

    // Inline styles
    const styles = {
        container: {
            height: "100vh",
            width: "100%",
            background: "linear-gradient(135deg, #FFF0F5 0%, #FFE4E1 50%, #FFF0F5 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            fontFamily: "'Montserrat', sans-serif",
        },
        floralPattern: {
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjIiIHg9IjAiIHk9IjAiIGZpbGw9IiNGRjE0OUQiIG9wYWNpdHk9IjAuMSIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjIiIGZpbGw9IiNGRjE0OUQiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')",
            opacity: 0.3,
        },
        sparkle1: {
            position: "absolute",
            top: "15%",
            left: "10%",
            width: "15px",
            height: "15px",
            background: "#FF1493",
            borderRadius: "50%",
            filter: "blur(1px)",
            animation: "sparkle 3s ease-in-out infinite",
        },
        sparkle2: {
            position: "absolute",
            bottom: "20%",
            right: "15%",
            width: "20px",
            height: "20px",
            background: "#FF69B4",
            borderRadius: "50%",
            filter: "blur(1px)",
            animation: "sparkle 4s ease-in-out infinite 1s",
        },
        sparkle3: {
            position: "absolute",
            top: "30%",
            right: "20%",
            width: "12px",
            height: "12px",
            background: "#FFB6C1",
            borderRadius: "50%",
            filter: "blur(1px)",
            animation: "sparkle 3.5s ease-in-out infinite 0.5s",
        },
        card: {
            position: "relative",
            zIndex: 10,
            padding: "2.5rem",
            maxWidth: "500px",
            width: "85%",
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            border: "1px solid rgba(255, 20, 147, 0.2)",
            boxShadow: "0 15px 35px rgba(255, 105, 180, 0.2)",
            textAlign: "center",
            transition: "transform 0.3s ease",
            '@media (max-width: 768px)': {
                padding: "1.5rem",
                width: "90%",
            }
        },
        title: {
            fontSize: "2.2rem",
            fontWeight: "600",
            color: "#FF1493",
            marginBottom: "1rem",
            fontFamily: "'Playfair Display', serif",
            letterSpacing: "0.5px",
            '@media (max-width: 768px)': {
                fontSize: "1.8rem",
            }
        },
        text: {
            color: "#555",
            fontSize: "1rem",
            lineHeight: "1.6",
            marginBottom: "2rem",
            '@media (max-width: 768px)': {
                fontSize: "0.9rem",
            }
        },
        icon: {
            fontSize: "3rem",
            color: "#FF69B4",
            marginBottom: "1.5rem",
            animation: "float 3s ease-in-out infinite",
        },
        button: {
            background: "linear-gradient(135deg, #FF1493 0%, #FF69B4 100%)",
            color: "#fff",
            padding: "0.8rem 2rem",
            borderRadius: "30px",
            fontSize: "1rem",
            fontWeight: "500",
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 5px 15px rgba(255, 105, 180, 0.4)",
            letterSpacing: "0.5px",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            '@media (max-width: 768px)': {
                padding: "0.7rem 1.8rem",
                fontSize: "0.9rem",
            }
        },
        buttonHover: {
            transform: "translateY(-3px)",
            boxShadow: "0 8px 20px rgba(255, 105, 180, 0.6)",
        }
    };

    // Button hover animation
    const handleMouseEnter = (e) => {
        e.target.style.transform = styles.buttonHover.transform;
        e.target.style.boxShadow = styles.buttonHover.boxShadow;
    };

    const handleMouseLeave = (e) => {
        e.target.style.transform = "none";
        e.target.style.boxShadow = styles.button.boxShadow;
    };

    return (
        <> {user ? (
            <>{compo}</>
        ) : (
            <div style={styles.container}>
                <div style={styles.floralPattern}></div>
                <div style={styles.sparkle1}></div>
                <div style={styles.sparkle2}></div>
                <div style={styles.sparkle3}></div>

                <div style={styles.card}>
                    <div style={styles.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2a3 3 0 0 0-3 3c0 1.12.86 2 1.5 2.5L12 10l1.5-2.5c.64-.5 1.5-1.38 1.5-2.5a3 3 0 0 0-3-3z"></path>
                            <path d="M12 2v2"></path>
                            <path d="M5 10v4a7 7 0 1 0 14 0v-4"></path>
                            <path d="M12 18.5c0 1.1.9 2 2 2s2-.9 2-2h-4z"></path>
                        </svg>
                    </div>
                    <h1 style={styles.title}>Exclusive Women's Collection</h1>
                    <p style={styles.text}>This section is reserved for our valued customers. Please sign in to explore our latest women's fashion collection and exclusive offers.</p>
                    <button
                        style={styles.button}
                        onClick={() => navigate("/login")}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                            <polyline points="10 17 15 12 10 7"></polyline>
                            <line x1="15" y1="12" x2="3" y2="12"></line>
                        </svg>
                        Sign In to Continue
                    </button>
                </div>
            </div>
        )}
        </>
    );
};

export default CustomerProtected;