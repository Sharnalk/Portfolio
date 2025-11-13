export function Wave ({trigger}: {trigger: boolean}){
    return(
            <svg viewBox='0 0 900 100'
                 width='100%'
                 height='100%'
                 xmlns='http://www.w3.org/2000/svg'
                 className={`sine-wave opacity-0 md:opacity-100`}
            >
                <path
                    d='M 0 50
                    Q 50 0, 100 50
                    Q 150 100, 200 50
                    Q 250 0, 300 50
                    Q 350 100, 400 50
                    Q 450 0, 500 50
                    Q 550 100, 600 50
                    Q 650 0, 700 50
                    Q 750 100, 800 50
                    Q 850 0, 900 50
                    Q 950 100, 1000 50
                    Q 1050 0, 1100 50'
                    className={`stroke-[#333333] dark:stroke-[#EAEAEA] stroke-[4px] sine-wave-path`}
                    style={{ animationPlayState: trigger ? 'running' : 'paused' }}
                    fill='transparent'
                />
            </svg>
    )
}