import { useContext } from 'react';
import { Route, Switch } from 'wouter';

// Local imports
import { NotFound } from '../pages/NotFound';
import { Result } from '../components/Result';
import { Spinner } from '../components/Spinner';
import { context } from '../context';
import { Home } from '../pages/Home';

export const AppRoutes = () => {
  const { isLoading } = useContext(context);

  return (
    <div className='h-screen flex bg-gray-100 flex-col items-center dark:bg-gray-900 transition-colors duration-700'>
      {isLoading && <Spinner />}
      <Switch>
        <Route path='/' component={Home} />

        <Route path='/result' component={Result} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
};
