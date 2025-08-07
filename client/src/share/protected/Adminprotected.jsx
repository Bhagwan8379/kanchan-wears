// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const AdminProtected = ({ compo }) => {
//     const { admin } = useSelector((state) => state.auth);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const style = document.createElement("style");
//         style.innerHTML = `
//             @keyframes float {
//                 0%, 100% { transform: translateY(0); }
//                 50% { transform: translateY(-15px); }
//             }

//             @keyframes sparkle {
//                 0% { opacity: 0.3; transform: scale(0.8); }
//                 50% { opacity: 1; transform: scale(1.1); }
//                 100% { opacity: 0.3; transform: scale(0.8); }
//             }

//             @keyframes pulse {
//                 0%, 100% { transform: scale(1); opacity: 0.6; }
//                 50% { transform: scale(1.05); opacity: 1; }
//             }

//             @media (max-width: 768px) {
//                 .admin-card {
//                     padding: 2rem 1.5rem !important;
//                     width: 90% !important;
//                 }

//                 .admin-title {
//                     font-size: 2rem !important;
//                 }

//                 .admin-subtitle {
//                     font-size: 1rem !important;
//                 }

//                 .admin-text {
//                     font-size: 0.9rem !important;
//                 }

//                 .admin-ribbon {
//                     right: 10px !important;
//                     padding: 4px 15px !important;
//                     font-size: 0.8rem !important;
//                 }

//                 .admin-icon {
//                     font-size: 3rem !important;
//                 }

//                 .admin-button {
//                     padding: 0.8rem 2rem !important;
//                     font-size: 0.9rem !important;
//                 }

//                 .floating-dress {
//                     width: 60px !important;
//                     height: 60px !important;
//                 }

//                 .admin-signature {
//                     font-size: 1.2rem !important;
//                 }
//             }
//         `;
//         document.head.appendChild(style);
//         return () => {
//             document.head.removeChild(style);
//         };
//     }, []);

//     if (admin?.role === "admin") return <>{compo}</>;

//     const styles = {
//         container: {
//             height: "100vh",
//             width: "100%",
//             background: "linear-gradient(135deg, #FFF0F5 0%, #FFE4E1 50%, #FFF0F5 100%)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             position: "relative",
//             overflow: "hidden",
//             fontFamily: "'Playfair Display', serif",
//         },
//         floralPattern: {
//             position: "absolute",
//             width: "100%",
//             height: "100%",
//             opacity: 0.2,
//         },
//         sparkle1: {
//             position: "absolute",
//             top: "15%",
//             left: "10%",
//             width: "20px",
//             height: "20px",
//             background: "#FF1493",
//             borderRadius: "50%",
//             filter: "blur(1px)",
//             animation: "sparkle 3s ease-in-out infinite",
//         },
//         sparkle2: {
//             position: "absolute",
//             bottom: "20%",
//             right: "15%",
//             width: "25px",
//             height: "25px",
//             background: "#FF69B4",
//             borderRadius: "50%",
//             filter: "blur(1px)",
//             animation: "sparkle 4s ease-in-out infinite 1s",
//         },
//         floatingDress: {
//             position: "absolute",
//             top: "10%",
//             right: "10%",
//             width: "80px",
//             height: "80px",
//             animation: "float 5s ease-in-out infinite",
//             opacity: 0.7,
//         },
//         card: {
//             position: "relative",
//             zIndex: 10,
//             padding: "3rem 2.5rem",
//             maxWidth: "500px",
//             width: "85%",
//             background: "rgba(255, 255, 255, 0.95)",
//             backdropFilter: "blur(10px)",
//             borderRadius: "20px",
//             border: "1px solid rgba(255, 20, 147, 0.2)",
//             boxShadow: "0 25px 60px rgba(255, 105, 180, 0.2)",
//             textAlign: "center",
//             transition: "transform 0.3s ease",
//         },
//         ribbon: {
//             position: "absolute",
//             top: "-10px",
//             right: "20px",
//             background: "#FF1493",
//             color: "white",
//             padding: "5px 20px",
//             fontSize: "0.9rem",
//             fontWeight: "600",
//             letterSpacing: "1px",
//             borderRadius: "0 0 5px 5px",
//             boxShadow: "0 2px 10px rgba(255, 20, 147, 0.3)",
//         },
//         title: {
//             fontSize: "2.5rem",
//             fontWeight: "700",
//             color: "#FF1493",
//             marginBottom: "1rem",
//             letterSpacing: "0.5px",
//             textShadow: "2px 2px 4px rgba(255, 20, 147, 0.1)",
//         },
//         subtitle: {
//             fontSize: "1.2rem",
//             color: "#FF69B4",
//             marginBottom: "0.5rem",
//             fontStyle: "italic",
//         },
//         text: {
//             color: "#666",
//             fontSize: "1rem",
//             lineHeight: "1.7",
//             marginBottom: "2.5rem",
//         },
//         iconContainer: {
//             position: "relative",
//             marginBottom: "2rem",
//         },
//         mainIcon: {
//             fontSize: "4rem",
//             color: "#FF1493",
//             animation: "pulse 2s ease-in-out infinite",
//         },
//         button: {
//             background: "linear-gradient(135deg, #FF1493 0%, #FF69B4 100%)",
//             color: "#fff",
//             padding: "0.9rem 2.5rem",
//             borderRadius: "30px",
//             fontSize: "1rem",
//             fontWeight: "600",
//             border: "none",
//             cursor: "pointer",
//             transition: "all 0.3s ease",
//             boxShadow: "0 5px 20px rgba(255, 20, 147, 0.4)",
//             letterSpacing: "0.5px",
//             display: "inline-flex",
//             alignItems: "center",
//             gap: "10px",
//             position: "relative",
//             overflow: "hidden",
//             zIndex: 1,
//         },
//         buttonHover: {
//             transform: "translateY(-3px)",
//             boxShadow: "0 8px 25px rgba(255, 20, 147, 0.6)",
//         },
//         buttonBefore: {
//             content: '""',
//             position: "absolute",
//             top: 0,
//             left: "-100%",
//             width: "100%",
//             height: "100%",
//             background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)",
//             transition: "0.5s",
//             zIndex: -1,
//         },
//         signature: {
//             position: "absolute",
//             bottom: "20px",
//             right: "20px",
//             color: "rgba(255, 20, 147, 0.2)",
//             fontSize: "1.5rem",
//             fontWeight: "bold",
//             fontStyle: "italic",
//             letterSpacing: "1px",
//             userSelect: "none",
//         }
//     };

//     const handleMouseEnter = (e) => {
//         e.target.style.transform = styles.buttonHover.transform;
//         e.target.style.boxShadow = styles.buttonHover.boxShadow;
//         e.target.querySelector(":before").style.left = "100%";
//     };

//     const handleMouseLeave = (e) => {
//         e.target.style.transform = "none";
//         e.target.style.boxShadow = styles.button.boxShadow;
//         e.target.querySelector(":before").style.left = "-100%";
//     };

//     return (
//         <div style={styles.container}>
//             <div style={styles.floralPattern}></div>
//             <div style={styles.sparkle1}></div>
//             <div style={styles.sparkle2}></div>

//             <svg style={styles.floatingDress} className="floating-dress" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF1493" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M12 2a3 3 0 0 0-3 3c0 1.12.86 2 1.5 2.5L12 10l1.5-2.5c.64-.5 1.5-1.38 1.5-2.5a3 3 0 0 0-3-3z"></path>
//                 <path d="M12 2v2"></path>
//                 <path d="M5 10v4a7 7 0 1 0 14 0v-4"></path>
//                 <path d="M12 18.5c0 1.1.9 2 2 2s2-.9 2-2h-4z"></path>
//             </svg>

//             <div style={styles.card} className="admin-card">
//                 <div style={styles.ribbon} className="admin-ribbon">ADMIN ONLY</div>

//                 <div style={styles.iconContainer}>
//                     <svg style={styles.mainIcon} className="admin-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//                         <circle cx="12" cy="12" r="3"></circle>
//                         <path d="..."></path>
//                     </svg>
//                 </div>

//                 <h1 style={styles.title} className="admin-title">Fashion Dashboard</h1>
//                 <h2 style={styles.subtitle} className="admin-subtitle">Exclusive Admin Portal</h2>
//                 <p style={styles.text} className="admin-text">
//                     This premium dashboard is reserved for <strong style={{ color: "#FF1493" }}>authorized administrators</strong>.
//                     Please authenticate to manage collections, inventory, and analytics.
//                 </p>

//                 <button
//                     style={styles.button}
//                     className="admin-button"
//                     onClick={() => navigate("/shop")}
//                     onMouseEnter={handleMouseEnter}
//                     onMouseLeave={handleMouseLeave}
//                 >
//                     <span className="flex items-center" style={{ position: "relative", zIndex: 2 }}>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "8px" }}>
//                             <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
//                             <polyline points="10 17 15 12 10 7"></polyline>
//                             <line x1="15" y1="12" x2="3" y2="12"></line>
//                         </svg>
//                         ADMIN LOGIN
//                     </span>
//                     <span style={styles.buttonBefore}></span>
//                 </button>
//             </div>

//             <div className="admin-signature" style={styles.signature}>Élégance Admin</div>
//         </div>
//     );
// };

// export default AdminProtected;




import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminProtected = ({ compo }) => {
    const { admin } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        const style = document.createElement("style");
        style.innerHTML = `
            @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-15px); }
            }

            @keyframes sparkle {
                0% { opacity: 0.3; transform: scale(0.8); }
                50% { opacity: 1; transform: scale(1.1); }
                100% { opacity: 0.3; transform: scale(0.8); }
            }

            @keyframes pulse {
                0%, 100% { transform: scale(1); opacity: 0.6; }
                50% { transform: scale(1.05); opacity: 1; }
            }

            @media (max-width: 768px) {
                .admin-card {
                    padding: 2rem 1.5rem !important;
                    width: 90% !important;
                }

                .admin-title {
                    font-size: 2rem !important;
                }

                .admin-subtitle {
                    font-size: 1rem !important;
                }

                .admin-text {
                    font-size: 0.9rem !important;
                }

                .admin-ribbon {
                    right: 10px !important;
                    padding: 4px 15px !important;
                    font-size: 0.8rem !important;
                }

                .admin-icon {
                    font-size: 3rem !important;
                }

                .admin-button {
                    padding: 0.8rem 2rem !important;
                    font-size: 0.9rem !important;
                }

                .floating-dress {
                    width: 60px !important;
                    height: 60px !important;
                }

                .admin-signature {
                    font-size: 1.2rem !important;
                }
            }
        `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    if (admin) return <>{compo}</>;

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
            fontFamily: "'Playfair Display', serif",
        },
        floralPattern: {
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: 0.2,
        },
        sparkle1: {
            position: "absolute",
            top: "15%",
            left: "10%",
            width: "20px",
            height: "20px",
            background: "#FF1493",
            borderRadius: "50%",
            filter: "blur(1px)",
            animation: "sparkle 3s ease-in-out infinite",
        },
        sparkle2: {
            position: "absolute",
            bottom: "20%",
            right: "15%",
            width: "25px",
            height: "25px",
            background: "#FF69B4",
            borderRadius: "50%",
            filter: "blur(1px)",
            animation: "sparkle 4s ease-in-out infinite 1s",
        },
        floatingDress: {
            position: "absolute",
            top: "10%",
            right: "10%",
            width: "80px",
            height: "80px",
            animation: "float 5s ease-in-out infinite",
            opacity: 0.7,
        },
        card: {
            position: "relative",
            zIndex: 10,
            padding: "3rem 2.5rem",
            maxWidth: "500px",
            width: "85%",
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            border: "1px solid rgba(255, 20, 147, 0.2)",
            boxShadow: "0 25px 60px rgba(255, 105, 180, 0.2)",
            textAlign: "center",
            transition: "transform 0.3s ease",
        },
        ribbon: {
            position: "absolute",
            top: "-10px",
            right: "20px",
            background: "#FF1493",
            color: "white",
            padding: "5px 20px",
            fontSize: "0.9rem",
            fontWeight: "600",
            letterSpacing: "1px",
            borderRadius: "0 0 5px 5px",
            boxShadow: "0 2px 10px rgba(255, 20, 147, 0.3)",
        },
        title: {
            fontSize: "2.5rem",
            fontWeight: "700",
            color: "#FF1493",
            marginBottom: "1rem",
            letterSpacing: "0.5px",
            textShadow: "2px 2px 4px rgba(255, 20, 147, 0.1)",
        },
        subtitle: {
            fontSize: "1.2rem",
            color: "#FF69B4",
            marginBottom: "0.5rem",
            fontStyle: "italic",
        },
        text: {
            color: "#666",
            fontSize: "1rem",
            lineHeight: "1.7",
            marginBottom: "2.5rem",
        },
        iconContainer: {
            position: "relative",
            marginBottom: "2rem",
        },
        mainIcon: {
            fontSize: "4rem",
            color: "#FF1493",
            animation: "pulse 2s ease-in-out infinite",
        },
        button: {
            background: "linear-gradient(135deg, #FF1493 0%, #FF69B4 100%)",
            color: "#fff",
            padding: "0.9rem 2.5rem",
            borderRadius: "30px",
            fontSize: "1rem",
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 5px 20px rgba(255, 20, 147, 0.4)",
            letterSpacing: "0.5px",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            position: "relative",
            overflow: "hidden",
            zIndex: 1,
        },
        buttonHover: {
            transform: "translateY(-3px)",
            boxShadow: "0 8px 25px rgba(255, 20, 147, 0.6)",
        },
        buttonBefore: {
            content: '""',
            position: "absolute",
            top: 0,
            left: "-100%",
            width: "100%",
            height: "100%",
            background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)",
            transition: "0.5s",
            zIndex: -1,
        },
        signature: {
            position: "absolute",
            bottom: "20px",
            right: "20px",
            color: "rgba(255, 20, 147, 0.2)",
            fontSize: "1.5rem",
            fontWeight: "bold",
            fontStyle: "italic",
            letterSpacing: "1px",
            userSelect: "none",
        }
    };

    const handleMouseEnter = (e) => {
        e.target.style.transform = styles.buttonHover.transform;
        e.target.style.boxShadow = styles.buttonHover.boxShadow;
        e.target.querySelector(":before").style.left = "100%";
    };

    const handleMouseLeave = (e) => {
        e.target.style.transform = "none";
        e.target.style.boxShadow = styles.button.boxShadow;
        e.target.querySelector(":before").style.left = "-100%";
    };

    return (
        <div style={styles.container}>
            <div style={styles.floralPattern}></div>
            <div style={styles.sparkle1}></div>
            <div style={styles.sparkle2}></div>

            <svg style={styles.floatingDress} className="floating-dress" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF1493" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3c0 1.12.86 2 1.5 2.5L12 10l1.5-2.5c.64-.5 1.5-1.38 1.5-2.5a3 3 0 0 0-3-3z"></path>
                <path d="M12 2v2"></path>
                <path d="M5 10v4a7 7 0 1 0 14 0v-4"></path>
                <path d="M12 18.5c0 1.1.9 2 2 2s2-.9 2-2h-4z"></path>
            </svg>

            <div style={styles.card} className="admin-card">
                <div style={styles.ribbon} className="admin-ribbon">ADMIN ONLY</div>

                <div style={styles.iconContainer}>
                    {/* ✅ FIXED VALID SVG */}
                    <svg style={styles.mainIcon} className="admin-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 1 .33 1.82 2 2 0 1 1-3.45 1.94H7.72a2 2 0 1 1-3.45-1.94 1.65 1.65 0 0 1 .33-1.82l1.2-1.2a2 2 0 0 1 2.83 0l1.2 1.2a2 2 0 0 0 2.83 0l1.2-1.2a2 2 0 0 1 2.83 0l1.2 1.2z" />
                    </svg>
                </div>

                <h1 style={styles.title} className="admin-title">Fashion Dashboard</h1>
                <h2 style={styles.subtitle} className="admin-subtitle">Exclusive Admin Portal</h2>
                <p style={styles.text} className="admin-text">
                    This premium dashboard is reserved for <strong style={{ color: "#FF1493" }}>authorized administrators</strong>.
                    Please authenticate to manage collections, inventory, and analytics.
                </p>

                <button
                    style={styles.button}
                    className="admin-button"
                    onClick={() => navigate("/shop")}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <span className="flex items-center" style={{ position: "relative", zIndex: 2 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "8px" }}>
                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                            <polyline points="10 17 15 12 10 7"></polyline>
                            <line x1="15" y1="12" x2="3" y2="12"></line>
                        </svg>
                        ADMIN LOGIN
                    </span>
                    <span style={styles.buttonBefore}></span>
                </button>
            </div>

            <div className="admin-signature" style={styles.signature}>Élégance Admin</div>
        </div>
    );
};

export default AdminProtected;
