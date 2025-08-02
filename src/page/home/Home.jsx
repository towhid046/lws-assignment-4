import React from 'react'
import WelcomeMessage from '@/components/home/WelcomeMessage';
import PromptInput from '@/components/home/PromptInput';
import SettingsPanel from '@/components/home/SettingsPanel';
import ResultImages from '@/components/home/ResultImages';

const HomePage = () => {
  return (
    < main className="relative z-10" >
      <WelcomeMessage />
      <PromptInput />
      <SettingsPanel />
      <ResultImages />
    </main >
  )
}

export default HomePage;