import { UserCircle2, Languages, FileDown } from "lucide-react";
import { useSelector } from "react-redux";

const Settings = () => {
    const { username, role } = useSelector((state) => state.AuthData);

    return (
        <div className="page-content">
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-foreground">Settings</h1>
                <p className="text-muted-foreground mt-1">
                    Manage your profile and application preferences.
                </p>
            </div>

            {/* Settings Card */}
            <div className="bg-card p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-foreground mb-6 flex items-center">
                    <UserCircle2 className="mr-3" /> Profile & Settings
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column - Profile */}
                    <div className="space-y-6">
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

                        <button className="w-full py-2 px-4 rounded-md text-foreground bg-rose-600 hover:bg-rose-700 transition-colors">
                            Update Profile
                        </button>
                    </div>

                    {/* Right Column - Preferences */}
                    <div className="space-y-6">
                        {/* Language Selector */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                App Language
                            </label>
                            <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-foreground rounded-md">
                                <option>English</option>
                                <option>हिंदी (Hindi)</option>
                                <option>ਪੰਜਾਬੀ (Punjabi)</option>
                                <option>संताली (Santali)</option>
                                <option>गोंडी (Gondi)</option>
                            </select>
                        </div>

                        {/* Sync Status */}
                        <div className="border-t pt-4 dark:border-slate-700">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Data Synchronization
                            </label>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                ✅ Real-time synchronization is enabled.
                            </p>
                            <p className="text-xs mt-1 text-gray-500 dark:text-gray-400">
                                Last synced: Today at 11:21 PM
                            </p>
                        </div>

                        {/* Export Reports */}
                        {role !== "Patient" && (
                            <div className="border-t pt-4 dark:border-slate-700">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Export Reports
                                </label>
                                <button className="w-full mt-1 flex items-center justify-center py-3 px-4 rounded-md text-foreground bg-blue-600 hover:bg-blue-700 transition-colors">
                                    <FileDown className="mr-2" /> Export Village Data (PDF)
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
