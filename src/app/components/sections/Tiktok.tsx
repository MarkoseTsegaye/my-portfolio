"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

// TikTok video data with proper embed information
const tiktokVideos = [
  {
    id: "video1",
    title: "Latest TikTok Video 1",
    description: "Description of your first TikTok video",
    videoId: "7515236159757274411",
    username: "markswe7",
  },
  {
    id: "video2",
    title: "Latest TikTok Video 2",
    description: "Description of your second TikTok video",
    videoId: "7514503333613194539",
    username: "markswe7",
  },
  {
    id: "video3",
    title: "Latest TikTok Video 3",
    description: "Description of your third TikTok video",
    videoId: "7511183715364539690",
    username: "markswe7",
  },
];

const Tiktok = () => {
  useEffect(() => {
    // Load TikTok embed script
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://www.tiktok.com/embed.js"]'
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div id="tiktok" className="py-[4%] scroll-mt-8">
      <motion.h1
        className="text-3xl xs:text-5xl font-bold text-center pb-[5%]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Check out my TikTok!
      </motion.h1>

      <div className="flex flex-col lg:flex-row gap-16 justify-center items-center w-full max-w-7xl mx-auto px-4">
        {tiktokVideos.map((video, index) => (
          <motion.div
            key={video.id}
            className="w-full lg:w-1/3 max-w-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              {/* TikTok Video Embed */}
              <div className="relative bg-muted p-4">
                <blockquote
                  className="tiktok-embed"
                  cite={`https://www.tiktok.com/@${video.username}/video/${video.videoId}`}
                  data-video-id={video.videoId}
                  style={{ maxWidth: "605px", minWidth: "325px" }}
                >
                  <section>
                    <a
                      target="_blank"
                      title={`@${video.username}`}
                      href={`https://www.tiktok.com/@${video.username}?refer=embed`}
                    >
                      @{video.username}
                    </a>
                  </section>
                </blockquote>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Follow Me Section */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <a
          href="https://www.tiktok.com/@markswe7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
          </svg>
          @markswe7
        </a>
      </motion.div>
    </div>
  );
};

export default Tiktok;
