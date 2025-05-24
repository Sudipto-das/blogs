import { ExternalLink, Mail, User } from "lucide-react";

const About = () => {
    return (
        <>
        {/* About Me */}
        <div className="bg-card-background rounded-xl shadow-sm p-6 ">
            <h3 className="text-lg font-bold text-text-color mb-4 flex items-center">
                <User className="h-5 w-5 mr-2 text-primary-color" />
                About Me
            </h3>
            <p className="text-secondary-color text-sm leading-relaxed mb-4">
                I'm a passionate developer who loves exploring new technologies and sharing my learning journey.
                I write about real experiences, challenges, and solutions I encounter in my daily work.
            </p>
            <div className="flex items-center space-x-3">
                <a href="#" className="flex items-center text-secondary-color hover:text-primary-color transition-colors">
                    <Mail className="h-4 w-4 mr-1" />
                    <span className="text-sm">Contact</span>
                </a>
                <a href="#" className="flex items-center text-secondary-color hover:text-primary-color transition-colors">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    <span className="text-sm">Portfolio</span>
                </a>
            </div>
        </div>
        </>
    )
}   
export default About;