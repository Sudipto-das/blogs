const PersonalInformation = () => {
    const profileInfo = {
      name: "Sudipto Das",
      title: "Full Stack Developer & Tech Enthusiast",
      bio: "Passionate about modern web technologies, AI, and sharing knowledge through code and writing.",
      avatar: "/public/bussiness-man.png",
      stats: {
        articles: 47,
        followers: "2.1K",
        views: "125K",
      },
    }
  
    return (
      <div
        className="card-base rounded-2xl p-6 mb-8 backdrop-blur-sm"
       
      >
        <div className="flex flex-col md:flex-row items-center md:items-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="relative">
            <div
              className="absolute -inset-1 rounded-full blur opacity-30"
             
            ></div>
            <img
              src={profileInfo.avatar || "/placeholder.svg"}
              alt={profileInfo.name}
              className="relative w-32 h-32 rounded-full object-cover"
              style={{
                border: "4px solid var(--border-primary)",
                boxShadow: "var(--shadow-xl)",
              }}
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2
              className="text-3xl font-bold mb-2"
              style={{
                background: "linear-gradient(to right, var(--primary-500), var(--primary-700))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "var(--font-weight-bold)",
              }}
            >
              {profileInfo.name}
            </h2>
            <p
              className="text-xl mb-4"
              style={{
                color: "var(--text-secondary)",
                fontWeight: "var(--font-weight-medium)",
              }}
            >
              {profileInfo.title}
            </p>
            <p
              className="leading-relaxed mb-6 max-w-2xl"
              style={{
                color: "var(--text-primary)",
              }}
            >
              {profileInfo.bio}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-8 text-sm">
              <div className="flex flex-col items-center md:items-start">
                <span
                  className="text-2xl font-bold"
                  style={{
                    color: "var(--primary-500)",
                  }}
                >
                  {profileInfo.stats.articles}
                </span>
                <span style={{ color: "var(--text-secondary)" }}>Articles</span>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span
                  className="text-2xl font-bold"
                  style={{
                    color: "var(--primary-500)",
                  }}
                >
                  {profileInfo.stats.followers}
                </span>
                <span style={{ color: "var(--text-secondary)" }}>Followers</span>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span
                  className="text-2xl font-bold"
                  style={{
                    color: "var(--primary-500)",
                  }}
                >
                  {profileInfo.stats.views}
                </span>
                <span style={{ color: "var(--text-secondary)" }}>Total Views</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default PersonalInformation
  