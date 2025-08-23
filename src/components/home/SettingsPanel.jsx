import React from 'react'
import usePollination from '../../hooks/usePollination'

const ratios = ['1:1', '16:9', '4:3', '3:2']

const SettingsPanel = ({ inputState, setInputState }) => {
    const { models } = usePollination()

    const handleRatioClick = (ratio) => {
        setInputState(prev => ({
            ...prev,
            ratio,
            height: ratio === '1:1' ? '1024'
                : ratio === '16:9' ? '576'
                    : ratio === '4:3' ? '768' : '683',
        }))
    }

    return (
        <div className="border border-zinc-700/70 mb-6 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium">Advanced Settings</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Model Selection */}
                <div>
                    <label
                        htmlFor="model"
                        className="block text-sm font-medium text-zinc-700 mb-1"
                    >
                        Model
                    </label>
                    <select
                        onChange={(e) => setInputState(prev => ({ ...prev, model: e.target.value }))}
                        value={inputState.model}
                        id="model"
                        className="w-full px-3 py-2 bg-zinc-900/10 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                        {models?.map(model => (
                            <option className="bg-zinc-900" value={model} selected="">
                                {model}
                            </option>
                        ))}
                    </select>
                </div>
                {/* Seed Input : Auto Generated, readonly for user */}
                <div>
                    <label
                        htmlFor="seed"
                        className="block text-sm font-medium text-zinc-700 mb-1"
                    >
                        Seed (for reproducible results)
                    </label>
                    <input
                        type="number"
                        id="seed"
                        disabled="true"
                        className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Random"
                    />
                </div>
                {/* Width Input */}
                <div>
                    <label
                        htmlFor="width"
                        className="block text-sm font-medium text-zinc-700 mb-1"
                    >
                        Width
                    </label>
                    <input
                        type="number"
                        id="width"
                        onChange={(e) => setInputState(prev => ({ ...prev, width: e.target.value }))}
                        value={inputState.width}
                        className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                </div>
                {/* Height Input */}
                <div>
                    <label
                        htmlFor="height"
                        className="block text-sm font-medium text-zinc-700 mb-1"
                    >
                        Height
                    </label>
                    <input
                        onChange={(e) => setInputState(prev => ({ ...prev, height: e.target.value }))}
                        value={inputState.height}
                        type="number"
                        id="height"
                        className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                </div>
                {/* Aspect Ratio Presets */}
                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">
                        Aspect Ratio Presets
                    </label>
                    <div className="flex flex-wrap gap-2">
                        {ratios.map((ratio) => (
                            <button
                                key={ratio}
                                onClick={() => handleRatioClick(ratio)}
                                className={` px-3 py-2 text-xs rounded transition-colors ${ratio===inputState.ratio ? 'bg-zinc-800' :'hover:bg-zinc-800 bg-zinc-900/10'}`}
                            >
                                {ratio}
                            </button>
                        ))}
                    </div>
                        
                </div>
                {/* No Logo Toggle */}
            </div>
        </div>
    )
}

export default SettingsPanel