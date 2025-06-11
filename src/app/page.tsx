"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Moon,
  Sun,
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Calendar,
  Star,
  GitFork,
  Globe,
  GraduationCap,
  Gamepad2,
  Home,
  User,
  Code,
  Briefcase,
  MessageCircle,
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

const techStack = [
  {
    name: "JavaScript",
    color: "bg-green-50 text-green-700 border-green-200 hover:bg-green-100",
  },
  {
    name: "TypeScript",
    color: "bg-green-50 text-green-700 border-green-200 hover:bg-green-100",
  },
  {
    name: "React",
    color: "bg-green-50 text-green-700 border-green-200 hover:bg-green-100",
  },
  {
    name: "Next.js",
    color: "bg-green-50 text-green-700 border-green-200 hover:bg-green-100",
  },
  {
    name: "Node.js",
    color: "bg-green-50 text-green-700 border-green-200 hover:bg-green-100",
  },
  {
    name: "Python",
    color: "bg-green-50 text-green-700 border-green-200 hover:bg-green-100",
  },
  {
    name: "PostgreSQL",
    color: "bg-green-50 text-green-700 border-green-200 hover:bg-green-100",
  },
  {
    name: "MongoDB",
    color: "bg-green-50 text-green-700 border-green-200 hover:bg-green-100",
  },
  {
    name: "AWS",
    color: "bg-green-50 text-green-700 border-green-200 hover:bg-green-100",
  },
  {
    name: "Docker",
    color: "bg-green-50 text-green-700 border-green-200 hover:bg-green-100",
  },
  {
    name: "Web3",
    color: "bg-green-50 text-blue-700 border-blue-200 hover:bg-blue-100",
  },
  {
    name: "Rust",
    color: "bg-green-50 text-blue-700 border-blue-200 hover:bg-blue-100",
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
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order processing.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/username/ecommerce",
    live: "https://ecommerce-demo.com",
    stars: 124,
    forks: 32,
    gradient: "from-green-400 to-emerald-600",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    github: "https://github.com/username/taskmanager",
    live: "https://taskmanager-demo.com",
    stars: 89,
    forks: 21,
    gradient: "from-emerald-400 to-teal-600",
  },
  {
    id: 3,
    title: "AI Chat Assistant",
    description:
      "An intelligent chat assistant powered by OpenAI's GPT API with conversation memory and context awareness for enhanced user experience.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Python", "FastAPI", "OpenAI", "React"],
    github: "https://github.com/username/ai-chat",
    live: "https://ai-chat-demo.com",
    stars: 156,
    forks: 43,
    gradient: "from-teal-400 to-green-600",
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

// Add this before the LinkPreview component
const previewCache = new Map<string, { src: string; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
const PREFETCH_QUEUE: string[] = [];
let isPrefetching = false;

const prefetchPreview = async (url: string) => {
  if (previewCache.has(url)) {
    const cached = previewCache.get(url)!;
    if (Date.now() - cached.timestamp < CACHE_DURATION) {
      console.log("Using cached preview for:", url);
      return cached.src;
    }
  }

  try {
    console.log("Fetching preview for:", url);
    const response = await fetch(
      `https://api.microlink.io/?url=${encodeURIComponent(
        url
      )}&screenshot=true&meta=false&embed=screenshot.url&width=800&height=600`
    );
    const data = await response.json();
    console.log("Received preview data:", data);

    if (data.status === "success" && data.data.screenshot?.url) {
      const previewUrl = data.data.screenshot.url;
      console.log("Preview URL:", previewUrl);
      previewCache.set(url, {
        src: previewUrl,
        timestamp: Date.now(),
      });
      return previewUrl;
    }
    throw new Error("Failed to fetch preview: No screenshot URL in response");
  } catch (error) {
    console.error("Error prefetching preview:", error);
    return null;
  }
};

const processPrefetchQueue = async () => {
  if (isPrefetching || PREFETCH_QUEUE.length === 0) return;

  isPrefetching = true;
  while (PREFETCH_QUEUE.length > 0) {
    const url = PREFETCH_QUEUE.shift()!;
    await prefetchPreview(url);
    // Add a small delay between requests to avoid rate limiting
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  isPrefetching = false;
};

const LinkPreview = ({
  href,
  title,
  description,
  image,
  children,
}: {
  href: string;
  title: string;
  description: string;
  image?: string;
  children: React.ReactNode;
}) => {
  const [showPreview, setShowPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const [previewError, setPreviewError] = useState<string | null>(null);

  // Prefetch on mount
  useEffect(() => {
    if (!PREFETCH_QUEUE.includes(href)) {
      console.log("Adding to prefetch queue:", href);
      PREFETCH_QUEUE.push(href);
      processPrefetchQueue();
    }
  }, [href]);

  // Handle preview display
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const loadPreview = async () => {
      if (!showPreview) return;

      setIsLoading(true);
      setError(false);
      setPreviewError(null);

      try {
        // First check cache
        const cached = previewCache.get(href);
        if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
          console.log("Using cached preview for hover:", href);
          setPreviewSrc(cached.src);
          setIsLoading(false);
          return;
        }

        // If not in cache, fetch it
        console.log("Fetching preview for hover:", href);
        const src = await prefetchPreview(href);
        if (src) {
          console.log("Setting preview src:", src);
          setPreviewSrc(src);
        } else {
          throw new Error("Failed to load preview: No preview URL received");
        }
      } catch (err) {
        console.error("Error loading preview:", err);
        setError(true);
        setPreviewError(
          err instanceof Error ? err.message : "Failed to load preview"
        );
      } finally {
        setIsLoading(false);
      }
    };

    if (showPreview) {
      timeoutId = setTimeout(loadPreview, 100);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [showPreview, href]);

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    console.error("Image load error:", e);
    setError(true);
    setPreviewError("Failed to load preview image");
    const target = e.target as HTMLImageElement;
    target.src = "/placeholder.svg";
  };

  return (
    <div className="relative inline-block">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-600 hover:text-green-700 underline decoration-green-300 hover:decoration-green-500 transition-colors"
        onMouseEnter={() => setShowPreview(true)}
        onMouseLeave={() => setShowPreview(false)}
      >
        {children}
      </a>
      {showPreview && (
        <div className="absolute bottom-full left-0 mb-2 w-96 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-50 overflow-hidden transform -translate-x-1/4">
          {isLoading ? (
            <div className="p-4 animate-pulse">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
            </div>
          ) : error ? (
            <div className="p-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                    {title}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                    {description}
                  </p>
                  {previewError && (
                    <p className="text-xs text-red-500 dark:text-red-400 mt-1">
                      {previewError}
                    </p>
                  )}
                  <p className="text-xs text-green-600 dark:text-green-400 mt-2 truncate">
                    {href}
                  </p>
                </div>
              </div>
            </div>
          ) : previewSrc ? (
            <div>
              <div className="relative h-48 w-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                <img
                  src={previewSrc}
                  alt={`Preview of ${title}`}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                  crossOrigin="anonymous"
                  loading="lazy"
                />
                {isLoading && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                      <Globe className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                      {title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                      {description}
                    </p>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-2 truncate">
                      {href}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                    {title}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                    {description}
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-2 truncate">
                    {href}
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className="absolute -bottom-1 left-8 w-2 h-2 bg-white dark:bg-gray-900 border-r border-b border-gray-200 dark:border-gray-700 transform rotate-45"></div>
        </div>
      )}
    </div>
  );
};

const MagneticButton = ({ children, className, link, ...props }: any) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

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

  return (
    <button
      ref={buttonRef}
      className={`relative inline-flex items-center justify-center transition-all duration-300 ease-out ${className} ${
        isHovered ? "scale-110 shadow-2xl" : ""
      }`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) ${
          isHovered ? "scale(1.1)" : "scale(1)"
        }`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      {isHovered && (
        <div className="absolute inset-0 bg-green-400 rounded-md blur-xl opacity-30 animate-pulse"></div>
      )}
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
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/80 dark:bg-black/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-2xl p-2 shadow-2xl">
        <div className="flex items-center space-x-1">
          {dockItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                onMouseEnter={() => setActiveItem(item.id)}
                onMouseLeave={() => setActiveItem(null)}
                className={`relative p-3 rounded-xl transition-all duration-300 ease-out ${
                  activeItem === item.id
                    ? "bg-green-100 dark:bg-green-900 scale-125 -translate-y-2"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-110"
                }`}
              >
                <Icon
                  className={`w-5 h-5 transition-colors duration-300 ${
                    activeItem === item.id
                      ? "text-green-600 dark:text-green-400"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                />
                {activeItem === item.id && (
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black text-xs px-2 py-1 rounded-md whitespace-nowrap">
                    {item.label}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black dark:border-t-white"></div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
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
            (segment) => segment.x === head.x && segment.y === head.y
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
    <Card className="p-4 bg-white border-gray-100 dark:bg-black dark:border-gray-800">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Gamepad2 className="w-5 h-5 text-green-600 dark:text-green-400" />
          <h4 className="font-semibold text-gray-900 dark:text-gray-100">
            Snake Game
          </h4>
        </div>

        <div className="mb-3 flex justify-between text-sm">
          <span className="dark:text-gray-300">Score: {score}</span>
          <span className="dark:text-gray-300">High Score: {highScore}</span>
        </div>

        <div
          className="relative mx-auto mb-3 border-2 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
          style={{ width: canvasSize, height: canvasSize }}
        >
          {/* Snake */}
          {snake.map((segment, index) => (
            <div
              key={index}
              className={`absolute ${
                index === 0
                  ? "bg-green-600 dark:bg-green-500"
                  : "bg-green-400 dark:bg-green-600"
              } rounded-sm`}
              style={{
                left: segment.x * (canvasSize / gridSize),
                top: segment.y * (canvasSize / gridSize),
                width: canvasSize / gridSize - 1,
                height: canvasSize / gridSize - 1,
              }}
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
          />

          {/* Game Over Overlay */}
          {gameOver && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
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
            className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
          >
            Start Game
          </Button>
        ) : gameOver ? (
          <Button
            onClick={resetGame}
            size="sm"
            className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
          >
            Play Again
          </Button>
        ) : (
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Use arrow keys to play
          </p>
        )}
      </div>
    </Card>
  );
};

const GitHubStats = () => {
  const [githubData, setGithubData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const userResponse = await fetch(
          "https://api.github.com/users/ashishk15678"
        );
        const userData = await userResponse.json();

        const reposResponse = await fetch(
          "https://api.github.com/users/ashishk15678/repos?sort=updated&per_page=6"
        );
        const reposData = await reposResponse.json();

        setGithubData({
          user: userData,
          repos: reposData,
        });
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <Card className="p-5 bg-white border-gray-100 dark:bg-black dark:border-gray-800">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/3 mb-4"></div>
          <div className="space-y-3">
            <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded"></div>
            <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-5/6"></div>
            <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-4/6"></div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-5 bg-white border-gray-100 dark:bg-black dark:border-gray-800">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {githubData?.user?.public_repos || 0}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            Repositories
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {githubData?.user?.followers || 0}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            Followers
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {githubData?.user?.following || 0}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            Following
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {githubData?.repos?.reduce(
              (acc: number, repo: any) => acc + (repo.stargazers_count || 0),
              0
            ) || 0}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            Total Stars
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
          Recent Repositories
        </h4>
        {githubData?.repos?.slice(0, 3).map((repo: any) => (
          <div
            key={repo.id}
            className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h5 className="font-medium text-sm text-gray-900 dark:text-gray-100">
                  {repo.name}
                </h5>
                {repo.language && (
                  <Badge
                    variant="secondary"
                    className="text-xs px-2 py-0.5 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {repo.language}
                  </Badge>
                )}
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-1">
                {repo.description}
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3" />
                {repo.stargazers_count}
              </div>
              <div className="flex items-center gap-1">
                <GitFork className="h-3 w-3" />
                {repo.forks_count}
              </div>
            </div>
          </div>
        ))}
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
            linear-gradient(to bottom, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: `${40 + scrollProgress * 0.6}px ${
            40 + scrollProgress * 0.6
          }px`,
          transform: `perspective(1000px) rotateX(${Math.min(
            scrollProgress * 0.2,
            10
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
            8
          )}deg)`,
          transformOrigin: "center top",
        }}
      ></div>

      {/* Floating shapes */}
      <div className="absolute inset-0">
        {/* Circles */}
        {Array.from({ length: 15 }).map((_, index) => (
          <div
            key={`circle-${index}`}
            className="absolute rounded-full bg-gradient-to-br from-green-300/10 to-emerald-500/10 dark:from-green-700/10 dark:to-emerald-900/10 animate-float"
            style={{
              width: `${30 + Math.random() * 70}px`,
              height: `${30 + Math.random() * 70}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${15 + Math.random() * 20}s`,
              animationDelay: `${index * -2}s`,
              opacity: 0.4,
              boxShadow: "0 0 20px rgba(52, 211, 153, 0.1)",
            }}
          ></div>
        ))}

        {/* Squares */}
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={`square-${index}`}
            className="absolute bg-gradient-to-br from-green-300/10 to-emerald-500/10 dark:from-green-700/10 dark:to-emerald-900/10 animate-float"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDuration: `${20 + Math.random() * 20}s`,
              animationDelay: `${index * -1.5}s`,
              opacity: 0.3,
              boxShadow: "0 0 20px rgba(52, 211, 153, 0.1)",
            }}
          ></div>
        ))}

        {/* Triangles (CSS triangles) */}
        {Array.from({ length: 8 }).map((_, index) => {
          const size = 20 + Math.random() * 30;
          return (
            <div
              key={`triangle-${index}`}
              className="absolute animate-float"
              style={{
                width: 0,
                height: 0,
                borderLeft: `${size / 2}px solid transparent`,
                borderRight: `${size / 2}px solid transparent`,
                borderBottom: `${size}px solid rgba(52, 211, 153, 0.1)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animationDuration: `${25 + Math.random() * 20}s`,
                animationDelay: `${index * -3}s`,
                opacity: 0.3,
                filter: "blur(1px)",
              }}
            ></div>
          );
        })}
      </div>

      {/* Tree branches */}
      <div className="absolute inset-0">
        {/* Main branch */}
        <div
          className="absolute right-[10%] top-0 w-0.5 h-full bg-gradient-to-b from-green-400 to-emerald-600 opacity-20 shadow-[0_0_15px_rgba(52,211,153,0.3)] transition-all duration-1000"
          style={{
            filter: "blur(0.5px)",
          }}
        ></div>

        {/* Horizontal branches */}
        {[15, 30, 45, 60, 75, 90].map((position, index) => (
          <div
            key={index}
            className="absolute right-[10%] w-[15vw] h-0.5 bg-gradient-to-r from-green-400 to-transparent opacity-20 shadow-[0_0_10px_rgba(52,211,153,0.2)] transition-all duration-1000"
            style={{
              top: `${position}%`,
              filter: "blur(0.5px)",
            }}
          ></div>
        ))}

        {/* Diagonal branches */}
        {[25, 50, 75].map((position, index) => (
          <div
            key={index}
            className="absolute right-[10%] w-[10vw] h-0.5 bg-gradient-to-r from-green-400 to-transparent opacity-20 shadow-[0_0_10px_rgba(52,211,153,0.2)] transition-all duration-1000 origin-right"
            style={{
              top: `${position}%`,
              transform: index % 2 === 0 ? "rotate(-30deg)" : "rotate(30deg)",
              filter: "blur(0.5px)",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

const ProgressIndicator = ({ scrollProgress }: { scrollProgress: number }) => {
  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40">
      <div className="h-40 w-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
        <div
          className="w-full bg-gradient-to-b from-green-400 to-emerald-600 transition-all duration-300 ease-out rounded-full"
          style={{ height: `${scrollProgress}%` }}
        ></div>
      </div>
    </div>
  );
};

const GlowingFooter = () => {
  return (
    <footer className="relative py-12 overflow-hidden z-1">
      <div className="inset-0 green-50/20 dark:to-green-900/10"></div>
      <div className=" px-4 sm:px-6">
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 opacity-30 dark:opacity-40 rounded-full transform"></div>

          {/* Text with gradient */}
          <h2
            className=" text-[18rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-500 to-green-600
          [text-shadow:0_0_10px_rgba(52,211,153,0.5)] flex items-center justify-center
          "
          >
            ASHISH
          </h2>
        </div>

        <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} • All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "dark bg-black" : "bg-gray-50"
      }`}
    >
      {/* Background Elements */}
      <BackgroundElements scrollProgress={scrollProgress} />

      {/* Progress Indicator */}
      <ProgressIndicator scrollProgress={scrollProgress} />

      {/* Floating Dock */}
      <FloatingDock />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-8" id="home">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10 ring-2 ring-green-500 ring-offset-2 dark:ring-offset-black">
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/147980956?v=4"
                alt="Profile"
              />
              <AvatarFallback className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                AS
              </AvatarFallback>
            </Avatar>
            <div>
              <h1
                className={`text-xl font-semibold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Ashish
              </h1>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Full Stack Developer
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsDark(!isDark)}
            className="rounded-full border-green-200 hover:bg-green-50 dark:border-green-800 dark:text-white  dark:hover:bg-green-900 dark:hover:text-white"
          >
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </header>

        {/* Hero Section */}
        <section className="mb-12" id="about">
          <Card
            className={`p-6 ${
              isDark ? "bg-black border-gray-800" : "bg-white border-gray-100"
            } shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90`}
          >
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <h2
                  className={`text-2xl font-semibold mb-3 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Building Digital Experiences
                </h2>
                <p
                  className={`text-sm mb-4 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  } leading-relaxed`}
                >
                  I'm a passionate full-stack developer specializing in creating
                  beautiful and functional web applications. With 2+ years of
                  experience, I've worked with startups and enterprises to bring
                  their ideas to life.
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-green-500 dark:text-green-400" />
                    <span
                      className={`text-sm ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Greater Noida, India
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-green-500 dark:text-green-400" />
                    <span
                      className={`text-sm ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Available for work
                    </span>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  ></p>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    I write blogs on{" "}
                    <LinkPreview
                      href="https://tronlab.in"
                      title="TronLab"
                      description="Technical blog covering web development, programming tutorials, and industry insights. Latest articles on React, Node.js, and modern development practices."
                    >
                      tronlab.in
                    </LinkPreview>
                  </p>
                  <Link href="https://x.com/ashishonsol">
                    <p className="text-sm hover:underline">
                      Also available on X
                    </p>
                  </Link>
                </div>
                <div className="flex gap-3">
                  <Link href="mailto:ashish@ashish.services" className="flex-1">
                    <MagneticButton
                      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 
                      text-white px-4 py-2 rounded-md text-sm font-medium shadow-lg hover:shadow-green-500/25 
                      transition-all duration-300 w-full"
                    >
                      <Mail className="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
                      <span className="truncate">hi@ashish.services</span>
                    </MagneticButton>
                  </Link>
                  <Link href="https://github.com/ashishk15678">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-green-200 hover:bg-green-50 dark:border-green-800 dark:hover:bg-green-900 dark:text-white flex-shrink-0"
                    >
                      <Github className="h-4 w-4 mr-1.5" />
                      GitHub
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300">
                  <Image
                    src="https://avatars.githubusercontent.com/u/147980956?v=4"
                    alt="Profile"
                    width={200}
                    height={240}
                    className="object-cover w-full h-full opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent" />
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h3
            className={`text-lg font-semibold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {education.map((edu, index) => (
              <Card
                key={index}
                className={`p-4 ${
                  isDark
                    ? "bg-black border-gray-800"
                    : "bg-white border-gray-100"
                } hover:shadow-md transition-shadow backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90`}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h4
                      className={`font-semibold text-sm ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {edu.degree}
                    </h4>
                    <p
                      className={`text-sm ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {edu.school}
                    </p>
                    <p
                      className={`text-xs ${
                        isDark ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {edu.year}
                    </p>
                    <p
                      className={`text-xs mt-1 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {edu.description}
                    </p>
                    <Badge
                      variant="secondary"
                      className="mt-2 text-xs dark:bg-gray-800 dark:text-gray-300"
                    >
                      GPA: {edu.gpa}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12" id="skills">
          <h3
            className={`text-lg font-semibold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <Badge
                key={tech.name}
                variant="outline"
                className={`px-3 py-1 text-xs font-medium border transition-all duration-200 hover:scale-105 hover:shadow-sm ${
                  isDark
                    ? "bg-black text-gray-200 border-gray-800 hover:bg-gray-900"
                    : tech.color
                }`}
                style={{ animationDelay: `${index * 30}ms` }}
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </section>

        {/* GitHub Stats */}
        <section className="mb-12">
          <h3
            className={`text-lg font-semibold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            GitHub Activity
          </h3>
          <GitHubStats />
        </section>

        {/* Game Section */}
        <section className="mb-12">
          <h3
            className={`text-lg font-semibold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Take a Break - Play a Game!
          </h3>
          <SnakeGame />
        </section>

        {/* Featured Projects */}
        <section className="mb-12" id="projects">
          <h3
            className={`text-lg font-semibold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className={`group cursor-pointer transition-all duration-500 ease-out ${
                  hoveredProject === project.id
                    ? "scale-110 shadow-2xl z-10 -rotate-1"
                    : hoveredProject !== null
                    ? "scale-95 opacity-60"
                    : "hover:shadow-lg"
                } ${
                  isDark
                    ? "bg-black border-gray-800"
                    : "bg-white border-gray-100"
                } backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}
                  ></div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
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
                      className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 dark:bg-gray-800 dark:text-white"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-3.5 w-3.5 mr-1.5" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200 dark:bg-green-700 dark:hover:bg-green-600"
                      asChild
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                        Live
                      </a>
                    </Button>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle
                    className={`text-base ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </CardTitle>
                  <CardDescription
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs px-2 py-0.5 bg-green-50 text-green-700 dark:bg-gray-800 dark:text-gray-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {project.stars}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="h-3 w-3" />
                        {project.forks}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-12">
          <Card
            className={`p-6 text-center ${
              isDark ? "bg-black border-gray-800" : "bg-white border-gray-100"
            } backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90`}
          >
            <h3
              className={`text-lg font-semibold mb-3 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Let's Work Together
            </h3>
            <p
              className={`text-sm mb-4 ${
                isDark ? "text-gray-300" : "text-gray-600"
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
            >
              <MagneticButton
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 
                text-white px-6 py-3 rounded-lg font-medium shadow-xl hover:shadow-green-500/25 
                transition-all duration-300 w-full"
              >
                <Mail className="h-4 w-4 mr-2" />
                Book a call
              </MagneticButton>
            </Link>
          </Card>
        </section>

        {/* Glowing Footer */}
      </div>
      <GlowingFooter />
    </div>
  );
}
