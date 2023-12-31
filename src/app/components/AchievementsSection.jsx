'use client'
import React from 'react';
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(() => import('react-animated-numbers'), {
  ssr: false,
});

const achievementsList = [
  {
    metric: 'Projects',
    value: 100,
    postfix: '+',
  },
  {
    prefix: '~',
    metric: 'Users',
    value: 100,
  },
  {
    metric: 'Awards',
    value: 7,
  },
  {
    metric: 'Years',
    value: 2,
  },
];

export default function AchievementsSection() {
  return (
    <div className='py-8 px-4 xl:px-16'>
      <div className='border border-[#33353f] rounded-md py-8 px-4 sm:px-8 xl:px-16 flex flex-col md:flex-row items-center justify-between'>
        {achievementsList.map((achievement, index) => {
          return (
            <div key={index} className='my-4 md:my-0 flex flex-col items-center justify-center'>
              <h2 className='text-white text-4xl font-bold flex flex-row items-center'>
                {achievement.prefix && <span className='mr-1'>{achievement.prefix}</span>}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale='en-US'
                  className='text-4xl font-bold'
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tension: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix && <span className='ml-1'>{achievement.postfix}</span>}
              </h2>
              <p className='text-[#adb7be] text-base'>{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
