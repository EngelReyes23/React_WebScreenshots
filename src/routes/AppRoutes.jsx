import { useContext } from 'react';
import { Route, Switch } from 'wouter';

// Local imports
import { Form } from '../components/Form';
import { Result } from '../components/Result';
import { Spinner } from '../components/Spinner';
import { ToggleButton } from '../components/ToggleButton';
import { context } from '../context';
import { NotFound } from '../pages/NotFound';

export const AppRoutes = () => {
  const { isLoading } = useContext(context);

  return (
    <div className='h-screen flex bg-gray-100 flex-col items-center dark:bg-gray-900 transition-colors duration-700'>
      {isLoading && <Spinner />}

      <ToggleButton />

      <Switch>
        <Route path='/' component={Form} />

        <Route path='/result' component={Result} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
};
