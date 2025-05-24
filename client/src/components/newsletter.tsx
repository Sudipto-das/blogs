import { BookOpen } from "lucide-react";

const Newsletter = () => {
    return (
        <div>
            {/* Newsletter */}
            <div className="bg-slate-900 rounded-xl shadow-sm p-6 text-white">
                <h3 className="text-lg font-bold mb-2 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Stay Updated
                </h3>
                <p className="text-slate-300 mb-4 text-sm">
                    Get notified when I publish new articles about my tech journey and learnings.
                </p>
                <div className="space-y-3">
                    <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full px-4 py-2 rounded-lg bg-white text-gray-900 border-0 focus:ring-2 focus:ring-slate-400"
                    />
                    <button className="w-full bg-white text-slate-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;