import FavoriteIcon from '@teable-group/ui-lib/icons/app/favorite.svg';
import HomeIcon from '@teable-group/ui-lib/icons/app/home.svg';
import Image from 'next/image';
import { useIsHydrated } from '@/lib/use-is-hydrated';
import { TableList } from '../blocks/table/TableList';
import { ThemePicker } from './ThemePicker';

export const SideBar: React.FC = () => {
  const isHydrated = useIsHydrated();

  return (
    <div className="max-w-xs h-full w-56 overflow-y-auto border-r border-base-300">
      <div className="mx-2 my-4">
        <Image
          width={32}
          height={32}
          loading={'eager'}
          src={'/shared-assets/images/teable-red.png'}
          alt={'tailwind-ui-logo'}
          className="rounded object-cover object-center inline-block"
        />
        <span className="px-1 font-bold">Teable</span>
        {isHydrated && <ThemePicker />}
      </div>

      <div className="divide-y divide-solid divide-base-300">
        <div>
          <div className="m-2">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered input-xs w-full max-w-xs"
            />
          </div>
          <ul className="menu py-2">
            <li>
              <a className="py-1">
                <HomeIcon /> Home
              </a>
            </li>
            <li>
              <a className="py-1">
                <FavoriteIcon /> Favorites
              </a>
            </li>
          </ul>
        </div>
        <TableList />
      </div>
    </div>
  );
};
