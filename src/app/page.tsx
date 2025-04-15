"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { getCalApi } from "@calcom/embed-react";

export default function HomeContent() {
  const [leetcodeStats, setLeetcodeStats] = useState({
    solved: 0,
    ranking: 0,
    medals: { gold: 0, silver: 0, bronze: 0 }
  });
  const [skills, setSkills] = useState({
    languages: [],
    frameworks: [],
    tools: [],
    platforms: [],
    software: []
  });

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "30min" });
      cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch LeetCode stats
        const leetcodeResponse = await fetch('https://leetcode-stats-api.herokuapp.com/ashish15678');
        const leetcodeData = await leetcodeResponse.json();
        setLeetcodeStats({
          solved: leetcodeData.totalSolved,
          ranking: leetcodeData.ranking,
          medals: {
            gold: Math.floor(leetcodeData.totalSolved / 100),
            silver: Math.floor((leetcodeData.totalSolved % 100) / 50),
            bronze: Math.floor((leetcodeData.totalSolved % 50) / 25)
          }
        });

        // Fetch GitHub skills
        const skillsMap = {
          languages: new Set(['TypeScript', 'JavaScript', 'Python', 'SQL']),
          frameworks: new Set(['React', 'Next.js', 'TailwindCSS', 'Express.js']),
          tools: new Set(['MongoDB', 'PostgreSQL', 'Prisma', 'Drizzle']),
          platforms: new Set(['Vercel', 'AWS', 'Docker', 'GitHub']),
          software: new Set(['VS Code', 'Postman', 'DataGrip', 'Figma'])
        };


        setSkills({
          // @ts-ignore
          languages: Array.from(skillsMap.languages),
          // @ts-ignore
          frameworks: Array.from(skillsMap.frameworks),
          // @ts-ignore
          tools: Array.from(skillsMap.tools),
          // @ts-ignore
          platforms: Array.from(skillsMap.platforms),
          // @ts-ignore
          software: Array.from(skillsMap.software)
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="text-gray-600 text-xs">$ whoami</div>
          <h1 className="text-3xl font-bold text-white tracking-tight">ASHISH</h1>
          <div className="text-gray-600">Full Stack Developer & Designer</div>
        </div>

        <p className="text-gray-400 leading-relaxed max-w-2xl">
          Passionate about creating beautiful and functional web experiences. Specializing in full-stack development
          with a keen eye for design. Currently available for freelance projects and collaborations.
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => window.open('https://x.com/ashish15678', '_blank')}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg cursor-pointer text-sm font-medium transition-colors">
            Connect <Badge>X</Badge>
          </button>
          <button
            data-cal-namespace="30min"
            data-cal-link="ashish15678/30min"
            data-cal-config='{"layout":"month_view"}'
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors"
          >
            Schedule a Call
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/5 rounded-xl p-6 space-y-4">
          <h2 className="text-lg font-semibold text-white">LeetCode Stats</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-400">Problems Solved</div>
              <div className="text-2xl font-bold text-white">{leetcodeStats.solved}</div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Global Ranking</div>
              <div className="text-2xl font-bold text-white">#{leetcodeStats.ranking}</div>
            </div>
          </div>
          <div className="flex gap-3">
            {leetcodeStats.medals.gold > 0 && (
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                <span className="text-sm text-gray-400">×{leetcodeStats.medals.gold}</span>
              </div>
            )}
            {/* ... other medals ... */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-6">
        <h2 className="text-lg font-semibold text-white">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white/5 rounded-xl p-6 space-y-4">
              <h3 className="text-sm font-medium text-gray-400 capitalize">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item: string) => (
                  <span
                    key={item}
                    className="px-2 py-1 bg-white/10 rounded-md text-xs font-medium text-white/80 hover:bg-white/20 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-white">Connect</h2>
        <div className="flex flex-wrap gap-3">
          <a href="https://github.com/ashishk15678" className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm transition-colors">
            GitHub
          </a>
          <a href="https://twitter.com/ashish15678" className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm transition-colors">
            Twitter
          </a>
          <a href="mailto:hi@ashish.services" className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm transition-colors">
            Email
          </a>
        </div>
      </section>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 text-xs border border-gray-800 bg-black capitalize">
      {children}
    </span>
  )
}
