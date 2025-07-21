import { WaitlistWrapper } from "@/components/box"
import { RiDiscordOutline } from "@/components/icon"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Twitter, Mail, Globe } from "lucide-react"
import { FiGithub } from "react-icons/fi"
import { LiaTelegramPlane } from "react-icons/lia"

export const dynamic = "force-static"
export const revalidate = 30

export default async function Home() {
  return (
    <WaitlistWrapper>
      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <Avatar className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-xl font-bold shadow-lg border border-gray-700">
          <AvatarImage src="https://avatars.githubusercontent.com/u/87995243?v=4" alt="GXD" />
          <AvatarFallback>GXD</AvatarFallback>
        </Avatar>
      </div>

      {/* Profile Info */}
      <div className="space-y-3 text-center text-white">
        <div>
          <h1 className="text-xl font-bold text-slate-12">GalaXD</h1>
          <p className="text-slate-10 text-sm">Software Developer</p>
        </div>

        <p className="text-slate-10 text-xs leading-relaxed px-2">
          Enjoy working on various projects and exploring new technologies. Passionate about React, Node.js, and modern web technologies.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-3 pt-2">
          <a
            href="/github"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-slate-700/50 hover:bg-slate-4 flex items-center justify-center text-slate-11 hover:text-slate-12 transition-all duration-200 hover:scale-110"
          >
            <FiGithub className="w-4 h-4" />
          </a>
          <a
            href="/telegram"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-slate-700/50 hover:bg-slate-4 flex items-center justify-center text-slate-11 hover:text-slate-12 transition-all duration-200 hover:scale-110"
          >
            <LiaTelegramPlane className="w-4 h-4" />
          </a>
          <a
            href="/twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-slate-700/50 hover:bg-slate-4 flex items-center justify-center text-slate-11 hover:text-slate-12 transition-all duration-200 hover:scale-110"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href="/discord"
            className="w-8 h-8 rounded-full bg-slate-700/50 hover:bg-slate-4 flex items-center justify-center text-slate-11 hover:text-slate-12 transition-all duration-200 hover:scale-110"
          >
            <RiDiscordOutline className="w-4 h-4" />
          </a>
        </div>

        {/* Action Buttons */}
        {/* <div className="flex flex-col gap-2 pt-3">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-4 py-3 bg-white text-black text-slate-12 rounded-full font-medium text-sm hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm"
          >
            <Globe className="w-4 h-4 text-slate-12" />
            View Portfolio
          </a>

          <div className="flex gap-2">
            <a
              href="mailto:me@galaxd.com"
              className="flex-1 px-4 py-2 bg-slate-700/50 text-slate-12 rounded-full font-medium text-xs hover:bg-slate-4 transition-colors duration-200 flex items-center justify-center gap-1"
            >
              <Mail className="w-3 h-3" />
              Contact
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-slate-700/50 text-slate-12 rounded-full font-medium text-xs hover:bg-slate-4 transition-colors duration-200 text-center"
            >
              Resume
            </a>
          </div>
        </div> */}
      </div>
    </WaitlistWrapper>
  )
}