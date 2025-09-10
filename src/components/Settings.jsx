import { UserCircle2, Languages,  RefreshCcwDot, FileDown } from "lucide-react";
import { useSelector } from "react-redux";
const Settings = () => {
    const { username , role} = useSelector((state) => state.AuthData);
    return (
        <div className="page-content">
            <h1 className="text-3xl font-bold text-foreground">Settings</h1>
            <p className="text-muted-foreground mt-1">Manage your profile and application preferences.</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Profile Management */}
                <div className="bg-card p-6 rounded-2xl shadow-lg">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-foreground mb-4 flex items-center">
                        <UserCircle2 className="mr-3" /> Profile Management
                    </h2>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Name
                            </label>
                            <input
                                id="settings-name"
                                type="text"
                                defaultValue={username}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-foreground rounded-md"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Role
                            </label>
                            <input
                                type="text"
                                id="settings-role"
                                defaultValue={role}
                                readOnly
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-slate-600 bg-gray-100 dark:bg-slate-900 text-gray-600 dark:text-gray-400 rounded-md"
                            />
                        </div>

                        <button className="w-full py-2 px-4 rounded-md text-foreground bg-rose-600 hover:bg-rose-700">
                            Update Profile
                        </button>
                    </div>
                </div>

                {/* Language & Sync */}
                <div className="bg-card p-6 rounded-2xl shadow-lg">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-foreground mb-4 flex items-center">
                        <Languages className="mr-3" /> Language & Sync
                    </h2>

                    <div className="space-y-4">
                        {/* Language Selector */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                App Language
                            </label>
                            <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-foreground rounded-md">
                                <option>English</option>
                                <option>हिंदी (Hindi)</option>
                                <option>ਪੰਜਾਬੀ (Punjabi)</option>
                                <option>संताली (Santali)</option>
                                <option>गोंडी (Gondi)</option>
                            </select>
                        </div>

                        {/* Sync Button */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Data Synchronization
                            </label>
                            <button className="w-full mt-1 flex items-center justify-center py-3 px-4 rounded-md text-foreground bg-green-600 hover:bg-green-700">
                                <RefreshCcwDot className="mr-2" /> Sync Offline Data
                            </button>
                            <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">
                                Last synced: Today at 11:21 PM
                            </p>
                        </div>

                        {/* Export Button */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Export Reports
                            </label>
                            <button className="w-full mt-1 flex items-center justify-center py-3 px-4 rounded-md text-foreground bg-blue-600 hover:bg-blue-700">
                                <FileDown className="mr-2" /> Export Village Data (PDF)
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
