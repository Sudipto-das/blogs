const PersonalInformation = () => {
    const profileInfo = {
        name: "Sudipto Das",
        title: "Full Stack Developer & Tech Enthusiast",
        bio: "Passionate about modern web technologies, AI, and sharing knowledge through code and writing.",
        avatar: "/public/bussiness-man.png",
        stats: {
            articles: 47,
            followers: "2.1K",
            views: "125K"
        }
    };

    return (
        <div className="bg-gradient-to-br from-card-background to-card-background/80 rounded-2xl shadow-lg p-6 mb-8  backdrop-blur-sm">
            <div className="flex flex-col  md:flex-row items-center md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary-color to-secondary-color rounded-full blur opacity-30"></div>
                    <img
                        src={profileInfo.avatar}
                        alt={profileInfo.name}
                        className="relative w-32 h-32 rounded-full border-4 border-border-color object-cover shadow-xl"
                    />
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-text-color mb-2 bg-gradient-to-r from-primary-color to-secondary-color bg-clip-text text-transparent">
                        {profileInfo.name}
                    </h2>
                    <p className="text-xl text-secondary-color mb-4 font-medium">{profileInfo.title}</p>
                    <p className="text-text-color leading-relaxed mb-6 max-w-2xl">{profileInfo.bio}</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-8 text-sm">
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-2xl font-bold text-primary-color">{profileInfo.stats.articles}</span>
                            <span className="text-secondary-color">Articles</span>
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-2xl font-bold text-primary-color">{profileInfo.stats.followers}</span>
                            <span className="text-secondary-color">Followers</span>
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-2xl font-bold text-primary-color">{profileInfo.stats.views}</span>
                            <span className="text-secondary-color">Total Views</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInformation;