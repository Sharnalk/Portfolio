import { useLayoutEffect, useState } from 'preact/hooks';
import { moonIcon, sunIcon } from '../assets/svgIcons';
import useStore from '../store/store';
import { CustomLink } from '../customFunctions/CustomLink';
import { Menu } from './Menu';

export function Header() {
  const { activeMenu, setActiveMenu, lang, setLang } = useStore();

  const switchLang = lang === 'en' ? 'fr' : 'en';

  const [theme, setTheme] = useState<boolean>(() =>
    sessionStorage.getItem('theme') === 'dark'
  );

  useLayoutEffect(() => {
    const themeClass = theme ? 'dark-theme' : 'light-theme';
    document.documentElement.classList.remove('dark-theme', 'light-theme');
    document.documentElement.classList.add(themeClass);
    sessionStorage.setItem('theme', theme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', theme);
  }, [theme, activeMenu]);

  return (
    <div className="header-anim header h-[15vh] md:h-[20vh]">
      <CustomLink to={"/"} className="custom-cursor">
        <img
          src="/img.png"
          alt="logo"
          className="h-[50px] w-[50px] z-10 fade-down"
          onClick={() => setActiveMenu(false)}
        />
      </CustomLink>
      <div className="flex items-center gap-x-2">
        <div className="p-2 z-10 fade-down" onClick={() => setTheme(!theme)}>
          {sunIcon}
          {moonIcon}
        </div>
        <p className="font-bold text-lg z-10 fade-down"
            onClick={() => setLang(switchLang)}>
          {switchLang.toUpperCase()}
        </p>
        <Menu />
      </div>
    </div>
  );
}
