import { Code, Sparkles } from "lucide-react";

const Skills = () => {
    const skills = ["React", "TypeScript", "Node.js", "Python", "AWS", "PostgreSQL"];
    const currentlyLearning = ["Rust", "WebAssembly", "Machine Learning"];

    return (
        <div className="bg-gradient-to-br from-card-background to-card-background/80 rounded-2xl shadow-lg p-8 backdrop-blur-sm">
            <div className="space-y-8">
                <div>
                    <h3 className="text-2xl font-bold text-text-color mb-6 flex items-center">
                        <Code className="h-6 w-6 mr-3 text-primary-color" />
                        Tech Stack
                    </h3>
                    <div className="space-y-6">
                        <div>
                            <p className="text-base font-medium text-secondary-color mb-4 flex items-center">
                                <Sparkles className="h-4 w-4 mr-2 text-primary-color" />
                                Currently Using
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-gradient-to-r from-primary-color/10 to-primary-color/5 text-primary-color px-4 py-2 rounded-full text-sm font-medium border border-primary-color/20 hover:border-primary-color/40 transition-all duration-300 hover:scale-105"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="text-base font-medium text-secondary-color mb-4 flex items-center">
                                <Sparkles className="h-4 w-4 mr-2 text-secondary-color" />
                                Currently Learning
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {currentlyLearning.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-gradient-to-r from-secondary-color/10 to-secondary-color/5 text-secondary-color px-4 py-2 rounded-full text-sm font-medium border border-secondary-color/20 hover:border-secondary-color/40 transition-all duration-300 hover:scale-105"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;