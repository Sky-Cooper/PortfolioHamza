import React, { useEffect, useRef, type JSX } from "react";
import { motion, type Variants } from "framer-motion";
import { Linkedin, Instagram, ArrowRight } from "lucide-react";
import qlWeb1 from '../assets/images/hamza.png';

// Placeholder image - now using a light grey for the background if it were visible

// --- Interactive Particle Background Component ---
const ParticleBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const particleCount = 70;
        
        const setCanvasSize = () => {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;

            constructor(x: number, y: number, size: number, speedX: number, speedY: number) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.speedX = speedX;
                this.speedY = speedY;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(163, 230, 53, 0.6)';
                ctx.fill();
            }
            

            update() {
                if (!canvas) return;
                if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
                if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
                this.x += this.speedX;
                this.y += this.speedY;
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                const size = Math.random() * 1.5 + 1;
                const x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
                const y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;
                const speedX = (Math.random() - 0.5) * 0.5;
                const speedY = (Math.random() - 0.5) * 0.5;
                particles.push(new Particle(x, y, size, speedX, speedY));
            }
        };

        const connect = () => {
            if (!ctx || !canvas) return;
            let opacityValue = 1;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    const distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x))
                                      + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
                    if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                        opacityValue = 1 - (distance / 20000);
                        ctx.strokeStyle = `rgba(163, 230, 53, ${opacityValue})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, innerWidth, innerHeight);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            connect();
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        window.addEventListener('resize', setCanvasSize);
        
        return () => {
            window.removeEventListener('resize', setCanvasSize);
            cancelAnimationFrame(animationFrameId);
        };

    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0 opacity-40" />;
};


// --- Animated Text Component ---
const AnimatedText: React.FC<{ text: string; el?: keyof JSX.IntrinsicElements; className: string; }> = ({ text, el = "p", className }) => {
    const letters = Array.from(text);

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.04, delayChildren: 0.04 * i },
        }),
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    const MotionElement = motion[el as keyof typeof motion] as unknown as React.ComponentType<any>;

    return (
        <MotionElement
            className={className}
            variants={container}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', flexWrap: 'wrap' }}
        >
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index}>
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </MotionElement>
    );
};


// --- Main Hero Section Component ---
const HeroSection: React.FC = () => {

    return (
        <section
            id="home"
            className="relative flex flex-col-reverse items-center justify-center min-h-screen gap-16 px-6 py-24 mx-auto overflow-hidden max-w-7xl sm:px-8 lg:px-12 md:flex-row"
        >
            <ParticleBackground />

            {/* Left side: Animated Portrait */}
            <motion.div
                className="relative z-10 flex-shrink-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
                initial={{ opacity: 0, x: -100, rotate: -5 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                whileHover={{ scale: 1.03, rotate: 2 }}
            >
                {/* Glitch Effect Border */}
                <div className="absolute inset-0 border-4 border-lime-400 rounded-3xl animate-glitch-border"></div>
                {/* CHANGED TO LIGHT GREY */}
                <div className="absolute inset-0 border-4 border-zinc-300 rounded-3xl animate-glitch-border animation-delay-100"></div>

                {/* Main Image */}
                <img
                    src={qlWeb1}
                    alt="Hamza Elbouana Portrait"
                    className="relative z-10 object-cover w-full h-full rounded-3xl shadow-lg shadow-lime-500/20"
                />

                {/* Subtle Glow behind image */}
                {/* CHANGED TO LIGHT GREY */}
                <div className="absolute inset-0 blur-xl opacity-60 bg-gradient-to-br from-lime-500/40 to-zinc-300/40 animate-pulse-light"></div>
            </motion.div>


            {/* Right side: Animated Text Content */}
            <motion.div 
                className="z-10 max-w-xl text-center md:text-left"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.2, delayChildren: 0.5 }
                    }
                }}
            >
                <AnimatedText el="h1" text="Hamza " className="mb-4 text-5xl font-extrabold leading-tight text-white sm:text-7xl" />
                <AnimatedText el="h1" text="Elbouanani " className="mb-4 text-5xl font-extrabold leading-tight text-white sm:text-7xl" />

                <AnimatedText el="h2" text="Software Engineer & Full-Stack Developer" className="mb-8 text-xl font-semibold text-zinc-300 sm:text-2xl" />

                <motion.p 
                    id="about" 
                    className="max-w-xl mx-auto mb-10 leading-relaxed text-zinc-400 md:mx-0"
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 1.2 } }}}
                >
                    As a final-year Software Engineering student at <span className="font-medium text-lime-300">EMSI</span> and co-founder of <span className="font-medium text-lime-300">Qreeb Lik</span>, 
                    I thrive at the intersection of innovation and execution. My focus is on developing elegant, high-performance digital solutions—from robust backend architectures to fluid, user-centric mobile and web applications—that solve real-world problems.
                </motion.p>
                
                <motion.div 
                        className="flex flex-col items-center justify-center gap-8 sm:flex-row md:justify-start"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 1.4 } }}}
                >
                    <a
                        href="#contact"
                        className="relative inline-flex items-center justify-center w-full px-8 py-3 overflow-hidden font-semibold text-black transition duration-300 rounded-full sm:w-auto group bg-lime-400 hover:shadow-lg hover:shadow-lime-500/30"
                    >
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-lime-300 rounded-full group-hover:w-56 group-hover:h-56"></span>
                        <span className="relative flex items-center">
                            Let’s Connect <ArrowRight className="w-5 h-5 ml-2" />
                        </span>
                    </a>

                    <div className="flex justify-center gap-6 text-zinc-500">
                        <a href="https://www.linkedin.com/in/hamza-elbouanani-150137268/" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:text-lime-400 hover:scale-110">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://www.instagram.com/qreeb_lik/" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:text-lime-400 hover:scale-110">
                            <Instagram size={24} />
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;