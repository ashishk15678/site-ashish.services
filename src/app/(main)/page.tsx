"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Briefcase,
  Calendar,
  Code,
  ExternalLink,
  Gamepad2,
  GitFork,
  Github,
  Globe,
  GraduationCap,
  Home,
  Mail,
  MapPin,
  MessageCircle,
  Moon,
  Star,
  Sun,
  User,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "../providers";

const techStack = [
  {
    name: "JavaScript",
    color: "bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100",
  },
  {
    name: "TypeScript",
    color: "bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100",
  },
  {
    name: "React",
    color: "bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100",
  },
  {
    name: "Next.js",
    color: "bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100",
  },
  {
    name: "Node.js",
    color: "bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100",
  },
  {
    name: "Python",
    color: "bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100",
  },
  {
    name: "PostgreSQL",
    color: "bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100",
  },
  {
    name: "MongoDB",
    color: "bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100",
  },
  {
    name: "AWS",
    color: "bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100",
  },
  {
    name: "Docker",
    color: "bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100",
  },
  {
    name: "Web3",
    color: "bg-zinc-50 text-blue-700 border-blue-200 hover:bg-blue-100",
  },
  {
    name: "Rust",
    color: "bg-zinc-50 text-blue-700 border-blue-200 hover:bg-blue-100",
  },
  {
    name: "Solana",
    color: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100",
  },
  {
    name: "Ethereum",
    color: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100",
  },
];

const projects = [
  {
    id: 1,
    title: "Db from scratch",
    description:
      "A full fledged database system designed completely from scratch",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Rust", "db", "database"],
    github: "https://github.com/ashishk15678/db",
    live: "#",
    stars: 124,
    forks: 32,
    gradient: "from-zinc-400 to-zinc-600",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    github: "https://github.com/ashishk15678/switch",
    live: "#",
    stars: 89,
    forks: 21,
    gradient: "from-zinc-400 to-teal-600",
  },
  {
    id: 3,
    title: "Node based n8n app",
    description: "This app is like n8n but with web3.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Node", "tailwindCSS", "NextJS", "React"],
    github: "https://github.com/ashishk15678/n8n-web3",
    live: "https://zon3.xyz",
    stars: 156,
    forks: 43,
    gradient: "from-teal-400 to-zinc-600",
  },
];

const education = [
  {
    degree: "Bachelor of Technology",
    school: "Noida Institute of Technology",
    year: "2024-2028",
    description: "Computer Science and Engineering",
    gpa: "8.5/10.0",
  },
  {
    degree: "Intermediate",
    school: "Army Public School",
    year: "2023",
    description: "Science",
    gpa: "72%",
  },
];

const dockItems = [
  { id: "home", icon: Home, label: "Home", href: "#home" },
  { id: "about", icon: User, label: "About", href: "#about" },
  { id: "skills", icon: Code, label: "Skills", href: "#skills" },
  { id: "projects", icon: Briefcase, label: "Projects", href: "#projects" },
  { id: "contact", icon: MessageCircle, label: "Contact", href: "#contact" },
];

const MagneticButton = ({ children, className, link, ...props }: any) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * 0.15;
    const deltaY = (e.clientY - centerY) * 0.15;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <button
      ref={buttonRef}
      className={`relative inline-flex items-center justify-center transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-black ${className} ${
        isHovered ? " shadow-md" : ""
      } ${
        isFocused
          ? "ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-black"
          : ""
      }`}
      //style={{
      //transform: `translate(${position.x}px, ${position.y}px) ${
      // isHovered ? "scale(0.9)" : "scale(1)"
      //  }`,
      // }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...props}
    >
      {/** {isHovered && (
        <div className="absolute inset-0 bg-zinc-400 rounded-md blur-xl opacity-30 animate-pulse"></div>
      )}
      */}
      {children}
    </button>
  );
};

const FloatingDock = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="navigation"
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="bg-white/80 dark:bg-black/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-2xl p-2 shadow-2xl">
        <div
          className="flex items-center space-x-1"
          role="list"
          aria-label="Navigation menu"
        >
          {dockItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                onMouseEnter={() => setActiveItem(item.id)}
                onMouseLeave={() => setActiveItem(null)}
                className={`relative p-3 rounded-xl transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-black ${
                  activeItem === item.id
                    ? "bg-zinc-100 dark:bg-zinc-900 scale-125 -translate-y-2"
                    : "hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:scale-110"
                }`}
                role="listitem"
                aria-label={`Navigate to ${item.label} section`}
                title={`Go to ${item.label} section`}
              >
                <Icon
                  className={`w-5 h-5 transition-colors duration-300 ${
                    activeItem === item.id
                      ? "text-zinc-600 dark:text-zinc-400"
                      : "text-zinc-600 dark:text-zinc-400"
                  }`}
                  aria-hidden="true"
                />
                <span className="sr-only">{item.label}</span>
                {activeItem === item.id && (
                  <div
                    className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black text-xs px-2 py-1 rounded-md whitespace-nowrap"
                    role="tooltip"
                    aria-live="polite"
                  >
                    {item.label}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black dark:border-t-white"></div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

const SnakeGame = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [direction, setDirection] = useState({ x: 0, y: 0 });
  const [gameOver, setGameOver] = useState(false);

  const gridSize = 20;
  const canvasSize = 300;

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const gameInterval = setInterval(() => {
      setSnake((currentSnake) => {
        const newSnake = [...currentSnake];
        const head = { ...newSnake[0] };
        head.x += direction.x;
        head.y += direction.y;

        // Check boundaries
        if (
          head.x < 0 ||
          head.x >= gridSize ||
          head.y < 0 ||
          head.y >= gridSize
        ) {
          setGameOver(true);
          return currentSnake;
        }

        // Check self collision
        if (
          newSnake.some(
            (segment) => segment.x === head.x && segment.y === head.y,
          )
        ) {
          setGameOver(true);
          return currentSnake;
        }

        newSnake.unshift(head);

        // Check food collision
        if (head.x === food.x && head.y === food.y) {
          setScore((prev) => prev + 10);
          setFood({
            x: Math.floor(Math.random() * gridSize),
            y: Math.floor(Math.random() * gridSize),
          });
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 150);

    return () => clearInterval(gameInterval);
  }, [direction, food, gameStarted, gameOver]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameStarted || gameOver) return;
      e.preventDefault();
      switch (e.key) {
        case "ArrowUp":
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [direction, gameStarted, gameOver]);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setSnake([{ x: 10, y: 10 }]);
    setDirection({ x: 1, y: 0 });
    setFood({ x: 15, y: 15 });
  };

  const resetGame = () => {
    if (score > highScore) setHighScore(score);
    setGameStarted(false);
    setGameOver(false);
    setScore(0);
    setSnake([{ x: 10, y: 10 }]);
    setDirection({ x: 0, y: 0 });
  };

  return (
    <Card className="p-4 bg-white border-zinc-100 dark:bg-black dark:border-zinc-800">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Gamepad2
            className="w-5 h-5 text-zinc-600 dark:text-zinc-400"
            aria-hidden="true"
          />
          <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">
            Snake Game
          </h4>
        </div>

        <div
          className="mb-3 flex justify-between text-sm"
          role="group"
          aria-label="Game statistics"
        >
          <span
            className="dark:text-zinc-300"
            aria-label={`Current score: ${score}`}
          >
            Score: {score}
          </span>
          <span
            className="dark:text-zinc-300"
            aria-label={`High score: ${highScore}`}
          >
            High Score: {highScore}
          </span>
        </div>

        <div
          className="relative mx-auto mb-3 border-2 border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900"
          style={{ width: canvasSize, height: canvasSize }}
          role="img"
          aria-label={`Snake game board. Current score: ${score}. High score: ${highScore}. ${
            gameOver
              ? "Game over."
              : gameStarted
                ? "Game in progress."
                : "Game ready to start."
          }`}
        >
          {/* Snake */}
          {snake.map((segment, index) => (
            <div
              key={index}
              className={`absolute ${
                index === 0
                  ? "bg-zinc-600 dark:bg-zinc-500"
                  : "bg-zinc-400 dark:bg-zinc-600"
              } rounded-sm`}
              style={{
                left: segment.x * (canvasSize / gridSize),
                top: segment.y * (canvasSize / gridSize),
                width: canvasSize / gridSize - 1,
                height: canvasSize / gridSize - 1,
              }}
              aria-hidden="true"
            />
          ))}

          {/* Food */}
          <div
            className="absolute bg-red-500 dark:bg-red-400 rounded-full"
            style={{
              left: food.x * (canvasSize / gridSize),
              top: food.y * (canvasSize / gridSize),
              width: canvasSize / gridSize - 1,
              height: canvasSize / gridSize - 1,
            }}
            aria-hidden="true"
          />

          {/* Game Over Overlay */}
          {gameOver && (
            <div
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
              role="alert"
              aria-live="polite"
            >
              <div className="text-white text-center">
                <p className="font-bold">Game Over!</p>
                <p className="text-sm">Score: {score}</p>
              </div>
            </div>
          )}
        </div>

        {!gameStarted ? (
          <Button
            onClick={startGame}
            size="sm"
            className="bg-zinc-600 hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-black"
            aria-label="Start snake game"
          >
            Start Game
          </Button>
        ) : gameOver ? (
          <Button
            onClick={resetGame}
            size="sm"
            className="bg-zinc-600 hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-black"
            aria-label="Reset and start new game"
          >
            Play Again
          </Button>
        ) : (
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            Use arrow keys to play
          </p>
        )}
      </div>
    </Card>
  );
};

const BackgroundElements = ({ scrollProgress }: { scrollProgress: number }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-100] overflow-hidden">
      {/* Grid that broadens as it goes up */}
      <div
        className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: `${40 + scrollProgress * 0.6}px ${
            40 + scrollProgress * 0.6
          }px`,
          transform: `perspective(1000px) rotateX(${Math.min(
            scrollProgress * 0.2,
            10,
          )}deg)`,
          transformOrigin: "center top",
        }}
      ></div>

      {/* Larger grid for depth */}
      <div
        className="absolute inset-0 opacity-10 dark:opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(34, 197, 94, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 197, 94, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: `${80 + scrollProgress * 1.2}px ${
            80 + scrollProgress * 1.2
          }px`,
          transform: `perspective(800px) rotateX(${Math.min(
            scrollProgress * 0.15,
            8,
          )}deg)`,
          transformOrigin: "center top",
        }}
      ></div>
    </div>
  );
};

const GlowingFooter = () => {
  return (
    <footer
      className="relative py-12 overflow-hidden z-1"
      role="contentinfo"
      aria-label="Portfolio footer"
    >
      <div className="inset-0 zinc-50/20 dark:to-zinc-900/10"></div>
      <div className=" px-4 sm:px-6">
        <div className="relative">
          {/* Glow effect */}
          <div
            className="absolute inset-0 blur-3xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 opacity-30 dark:opacity-40 rounded-full transform"
            aria-hidden="true"
          ></div>

          {/* Text with gradient */}
          <h2
            className=" text-[6rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600
          [text-shadow:0_0_10px_rgba(52,211,153,0.5)] flex items-center justify-center
          "
            aria-label="Ashish Kumar Portfolio"
          >
            ASHISH
          </h2>
        </div>

        <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">
          {" "}
          <BackgroundElements scrollProgress={0} />
          All rights reserved
        </p>
      </div>
    </footer>
  );
};

const TechBadge = ({
  tech,
  mousePosition,
  theme,
  role,
  ariaLabel,
  ...props
}: any) => {
  const badgeRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState({});

  useEffect(() => {
    // Only calculate and apply the transform if the badge is rendered and we have a mouse position.
    if (badgeRef.current && mousePosition.x !== 0 && mousePosition.y !== 0) {
      // @ts-ignore
      const rect = badgeRef.current.getBoundingClientRect();
      // Get the center of the badge.
      const badgeCenterX = rect.left + rect.width / 2;
      const badgeCenterY = rect.top + rect.height / 2;

      // Calculate the mouse position relative to the badge's center.
      const relativeX = mousePosition.x - badgeCenterX;
      const relativeY = mousePosition.y - badgeCenterY;

      // Normalize distances to create a smooth, falloff effect.
      const maxDistance = 300; // How far the effect reaches.
      const distance = Math.sqrt(relativeX * relativeX + relativeY * relativeY);
      const proximity = Math.min(1, distance / maxDistance);

      // Calculate rotation and translation. Increase the base values to make it more expressive.
      const rotateX = (relativeY / 50) * (1 - proximity) * 20; // More aggressive tilt.
      const rotateY = -(relativeX / 50) * (1 - proximity) * 20; // More aggressive tilt.
      const translateZ = (1 - proximity) * 50; // Causes the badge to "pop out" more.

      setTransformStyle({
        transform: `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
        transition: "transform 0.1s ease-out",
        // boxShadow: `${-relativeX * 0.05}px ${
        //   -relativeY * 0.05
        // }px 15px rgba(0, 0, 0, 0.2)`,
      });
    } else {
      setTransformStyle({});
    }
  }, [mousePosition, theme]); // Recalculate on mouse move or theme change.

  return (
    <div
      ref={badgeRef}
      className={`
        inline-block rounded-full px-4 py-2 text-sm font-medium border transition-transform duration-100
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-black
        ${
          theme === "dark"
            ? "bg-zinc-700 text-zinc-200 border-zinc-600"
            : "bg-gray-200 text-zinc-800 border-gray-300"
        }
        hover:scale-105 hover:shadow-sm
      `}
      style={transformStyle}
      role={role}
      aria-label={ariaLabel}
      tabIndex={0}
      {...props}
    >
      {tech.name}
    </div>
  );
};

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const { theme, setTheme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Add a global mouse move listener to get accurate positions anywhere on the screen.
    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Add keyboard navigation support
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        // Ensure focus is visible
        document.body.classList.add("keyboard-navigation");
      }
    };

    const handleMouseDown = () => {
      // Remove keyboard navigation class when mouse is used
      document.body.classList.remove("keyboard-navigation");
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return (
    <>
      {/* Skip Links for Accessibility */}
      <div className="sr-only">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
          tabIndex={1}
        >
          Skip to main content
        </a>
        <a
          href="#navigation"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-32 bg-blue-600 text-white px-4 py-2 rounded z-50"
          tabIndex={2}
        >
          Skip to navigation
        </a>
      </div>

      {/* Floating Dock */}
      <FloatingDock />
      {/* Main Content */}
      <main id="main-content" role="main" aria-label="Portfolio main content">
        {/* Header */}
        {/* <header role="banner" aria-label="Portfolio header">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
            <div className="flex justify-between items-center mb-8" id="home">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10 ring-2 ring-green-500 ring-offset-2 dark:ring-offset-black">
                  <AvatarImage
                    src="https://avatars.githubusercontent.com/u/147980956?v=4"
                    alt="Ashish Kumar profile picture"
                  />
                  <AvatarFallback className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                    AS
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1
                    className={`text-xl font-semibold ${
                      theme == "dark" ? "text-white" : "text-zinc-900"
                    }`}
                  >
                    Ashish Kumar
                  </h1>
                  <p
                    className={`text-sm ${
                      theme == "dark" ? "text-zinc-300" : "text-zinc-600"
                    }`}
                  >
                    Full Stack Developer
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full border-zinc-200 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-black"
                aria-label={`Switch to ${
                  theme === "dark" ? "light" : "dark"
                } mode`}
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Moon className="h-4 w-4" aria-hidden="true" />
                )}
              </Button>
            </div>
          </div>
        </header> */}

        {/* Hero Section */}
        <section className="mb-12" id="about" aria-labelledby="about-heading">
          <Card
            className={`p-6 ${
              theme == "dark"
                ? "bg-black border-zinc-800"
                : "bg-white border-none"
            } shadow-none transition-shadow duration-300 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90`}
          >
            <div className="items-center">
              <div className="w-full">
                <h2
                  id="about-heading"
                  className={`text-2xl font-semibold mb-3 ${
                    theme == "dark" ? "text-white" : "text-zinc-900"
                  }`}
                >
                  Building Digital Experiences
                </h2>
                <p
                  className={`text-sm mb-4 ${
                    theme == "dark" ? "text-zinc-300" : "text-zinc-600"
                  } leading-relaxed`}
                >
                  I'm a passionate full-stack developer specializing in creating
                  beautiful and functional web applications. With 2+ years of
                  experience, I've worked with startups as freelancer to bring
                  their ideas to life.
                </p>
                <div
                  className="flex flex-wrap gap-3 mb-4"
                  role="list"
                  aria-label="Personal information"
                >
                  <div className="flex items-center gap-1.5" role="listitem">
                    <MapPin
                      className="h-3.5 w-3.5 text-zinc-500 dark:text-zinc-400"
                      aria-hidden="true"
                    />
                    <span
                      className={`text-sm ${
                        theme == "dark" ? "text-zinc-300" : "text-zinc-600"
                      }`}
                    >
                      Greater Noida, India
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5" role="listitem">
                    <Calendar
                      className="h-3.5 w-3.5 text-green-500 text-shadow-green-500"
                      aria-hidden="true"
                    />
                    <span
                      className={`text-sm font-extrabold ${
                        theme == "dark" ? "text-green-500" : "text-green-500"
                      }`}
                    >
                      Available for work
                    </span>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <p
                    className={`text-sm ${
                      theme == "dark" ? "text-zinc-300" : "text-zinc-600"
                    }`}
                  ></p>
                  <p
                    className={`text-sm ${
                      theme == "dark" ? "text-zinc-300" : "text-zinc-600"
                    }`}
                  >
                    I write blogs on{" "}
                    <Link href="https://tronlab.in" title="TronLab">
                      tronlab.in
                    </Link>
                  </p>
                  <Link
                    href="https://x.com/ashishonsol"
                    prefetch={true}
                    target="_blank"
                  >
                    <p className="text-sm hover:underline">
                      Also available on X
                    </p>
                  </Link>
                </div>
                <div className="flex flex-col md:flex-row gap-3">
                  <Link
                    href="https://github.com/ashishk15678"
                    aria-label="Visit Ashish's GitHub profile"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-zinc-200 shadow-none bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-black"
                      aria-label="View GitHub profile"
                    >
                      <Github className="h-4 w-4 mr-1.5" aria-hidden="true" />
                      GitHub
                    </Button>
                  </Link>

                  <Link
                    href="mailto:ashish@ashish.services"
                    className="flex-1"
                    aria-label="Send email to Ashish"
                  >
                    <div
                      className="
     relative p-[2px] rounded-lg overflow-hidden
     shadow-lg shadow-zinc-500/25
     before:absolute before:inset-0 before:rounded-lg
     before:bg-[conic-gradient(from_0deg,rgb(255,0,0)_0%,rgb(255,165,0)_15%,rgb(255,255,0)_30%,rgb(0,255,0)_45%,rgb(0,127,255)_60%,rgb(139,0,255)_75%,rgb(255,0,0)_100%)]
     before:animate-gradient-spin
     transition-all duration-300
     hover:shadow-zinc-500/50
   "
                    >
                      <MagneticButton
                        className="
       relative bg-white
       dark:bg-zinc-900
       ring-0 px-4 py-2 rounded-md text-sm font-medium
       flex items-center justify-center
       w-full h-full
       transition-transform duration-300

     "
                        aria-label="Send email to Ashish Kumar"
                      >
                        <Mail
                          className="h-3.5 w-3.5 mr-1.5 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="truncate">Mail me</span>
                      </MagneticButton>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Education Section */}
        <section className="mb-12" aria-labelledby="education-heading">
          <h3
            id="education-heading"
            className={`text-lg font-semibold mb-4 ${
              theme == "dark" ? "text-white" : "text-zinc-900"
            }`}
          >
            Education
          </h3>
          <div
            className="grid md:grid-cols-1 gap-4"
            role="list"
            aria-label="Education history"
          >
            {education.map((edu, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl border ${
                  theme == "dark" || " border-zinc-200"
                } hover:shadow-sm transition-shadow backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90`}
                role="listitem"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="p-2 bg-zinc-100 dark:bg-zinc-900 rounded-lg"
                    aria-hidden="true"
                  >
                    <GraduationCap className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                  </div>
                  <div className="flex-1">
                    <h4
                      className={`font-semibold text-sm ${
                        theme == "dark" ? "text-white" : "text-zinc-900"
                      }`}
                    >
                      {edu.degree}
                    </h4>
                    <p
                      className={`text-sm ${
                        theme == "dark" ? "text-zinc-300" : "text-zinc-600"
                      }`}
                    >
                      {edu.school}
                      <span
                        className={`text-xs ml-4 ${
                          theme == "dark" ? "text-zinc-400" : "text-zinc-500"
                        }`}
                      >
                        ({edu.year})
                      </span>
                    </p>
                    <p
                      className={`text-xs mt-1 ${
                        theme == "dark" ? "text-zinc-400" : "text-zinc-500"
                      } `}
                    >
                      {edu.description}
                    </p>
                    <Badge
                      variant="secondary"
                      className="mt-2 text-xs dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      GPA : {edu.gpa}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12" id="skills" aria-labelledby="skills-heading">
          <h3
            id="skills-heading"
            className={`text-lg font-semibold mb-4 ${
              theme == "dark" ? "text-white" : "text-zinc-900"
            }`}
          >
            Technologies I Work With
          </h3>
          <div
            className="flex flex-wrap gap-2"
            role="list"
            aria-label="Technology skills"
          >
            {techStack.map((tech, index) => (
              <TechBadge
                key={tech.name}
                tech={tech}
                mousePosition={mousePosition}
                theme={theme}
                role="listitem"
                aria-label={`Technology: ${tech.name}`}
              />
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section
          className="mb-12"
          id="projects"
          aria-labelledby="projects-heading"
        >
          <h3
            id="projects-heading"
            className={`text-lg font-semibold mb-4 ${
              theme == "dark" ? "text-white" : "text-zinc-900"
            }`}
          >
            Featured Projects
          </h3>
          <div
            className="flex flex-col gap-6"
            role="list"
            aria-label="Featured projects"
          >
            {projects.map((project) => (
              <Card
                key={project.id}
                className={`group cursor-pointer transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-black ${
                  hoveredProject === project.id
                    ? "-rotate-1"
                    : "hover:shadow-lg"
                } ${
                  theme == "dark"
                    ? "bg-black border-zinc-800"
                    : "bg-white border-zinc-100"
                } backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                role="listitem"
                aria-label={`Project: ${project.title}`}
                tabIndex={0}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}
                  ></div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`Screenshot of ${project.title} project`}
                    width={500}
                    height={300}
                    className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center space-x-3 ${
                      hoveredProject === project.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <Button
                      size="sm"
                      variant="secondary"
                      asChild
                      className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 dark:bg-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-black"
                      aria-label={`View source code for ${project.title}`}
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View source code for ${project.title} on GitHub`}
                      >
                        <Github
                          className="h-3.5 w-3.5 mr-1.5"
                          aria-hidden="true"
                        />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-zinc-600 hover:bg-zinc-700 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200 dark:bg-zinc-700 dark:hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-black"
                      asChild
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink
                          className="h-3.5 w-3.5 mr-1.5"
                          aria-hidden="true"
                        />
                        Live
                      </a>
                    </Button>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle
                    className={`text-base ${
                      theme == "dark" ? "text-white" : "text-zinc-900"
                    }`}
                  >
                    {project.title}
                  </CardTitle>
                  <CardDescription
                    className={`text-sm ${
                      theme == "dark" ? "text-zinc-400" : "text-zinc-600"
                    }`}
                  >
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div
                    className="flex flex-wrap gap-1.5 mb-3"
                    role="list"
                    aria-label="Project technologies"
                  >
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs px-2 py-0.5 bg-zinc-50 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                        role="listitem"
                        aria-label={`Technology: ${tag}`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div
                    className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400"
                    role="group"
                    aria-label="Project statistics"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="flex items-center gap-1"
                        aria-label={`${project.stars} stars`}
                      >
                        <Star className="h-3 w-3" aria-hidden="true" />
                        <span aria-hidden="true">{project.stars}</span>
                      </div>
                      <div
                        className="flex items-center gap-1"
                        aria-label={`${project.forks} forks`}
                      >
                        <GitFork className="h-3 w-3" aria-hidden="true" />
                        <span aria-hidden="true">{project.forks}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Game Section */}
        <section className="mb-12" aria-labelledby="game-heading">
          <h3
            id="game-heading"
            className={`text-lg font-semibold mb-4 ${
              theme == "dark" ? "text-white" : "text-zinc-900"
            }`}
          >
            Take a Break - Play a Game!
          </h3>
          <SnakeGame />
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="mb-12"
          aria-labelledby="contact-heading"
        >
          <Card
            className={`p-6 text-center ${
              theme == "dark"
                ? "bg-black border-zinc-800"
                : "bg-white border-zinc-100"
            } backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90`}
          >
            <h3
              id="contact-heading"
              className={`text-lg font-semibold mb-3 ${
                theme == "dark" ? "text-white" : "text-zinc-900"
              }`}
            >
              Let's Work Together
            </h3>
            <p
              className={`text-sm mb-4 ${
                theme == "dark" ? "text-zinc-300" : "text-zinc-600"
              }`}
            >
              I'm always interested in new opportunities and exciting projects.
              Book a call with me to discuss your project. Look forward to
              working with you!
            </p>
            <Link
              href="https://cal.com/ashish15678/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
              aria-label="Book a 30-minute call with Ashish Kumar"
            >
              <div
                className="
     relative p-[2px] rounded-lg overflow-hidden
     shadow-lg shadow-zinc-500/25
     before:absolute before:inset-0 before:rounded-lg
     before:bg-[conic-gradient(from_0deg,rgb(255,0,0)_0%,rgb(255,165,0)_15%,rgb(255,255,0)_30%,rgb(0,255,0)_45%,rgb(0,127,255)_60%,rgb(139,0,255)_75%,rgb(255,0,0)_100%)]
     before:animate-gradient-spin
     transition-all duration-300
     hover:shadow-zinc-500/50
   "
              >
                <MagneticButton
                  className="
       relative bg-white
       dark:bg-zinc-900
       ring-0 px-4 py-2 rounded-md text-sm font-medium
       flex items-center justify-center
       w-full h-full
       transition-transform duration-300

     "
                  aria-label="Book a 30-minute call with Ashish Kumar"
                >
                  <Video
                    className="h-3.5 w-3.5 mr-1.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="truncate">Book a call</span>
                </MagneticButton>
              </div>
            </Link>

            {/* <MagneticButton
                className="bg-gradient-to-r from-zinc-600 to-zinc-600 hover:from-zinc-700 hover:to-zinc-700
                text-white px-6 py-3 rounded-lg font-medium shadow-xl hover:shadow-zinc-500/25
                transition-all duration-300 w-full"
              >
                <Mail className="h-4 w-4 mr-2" />
                Book a call
              </MagneticButton>
            </Link> */}
          </Card>
        </section>
      </main>

      {/* Glowing Footer */}
      <GlowingFooter />
    </>
  );
}
