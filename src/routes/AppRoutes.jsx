import { useAtomValue } from 'jotai'
import { Route, Switch } from 'wouter'

// Local imports
import { isLoadingAtom } from '../atoms/uiAtoms'
import { Form } from '../components/Form'
import { Result } from '../components/Result'
import { Spinner } from '../components/Spinner'
import { ToggleButton } from '../components/ToggleButton'
import { NotFound } from '../pages/NotFound'

export const AppRoutes = () => {
  const isLoading = useAtomValue(isLoadingAtom)

  return (
    <div className='flex h-screen flex-col items-center bg-gray-100 transition-colors duration-700 dark:bg-gray-900'>
      {isLoading && <Spinner />}

      <ToggleButton />

      <Switch>
        <Route path='/' component={Form} />

        <Route path='/result' component={Result} />

        <Route component={NotFound} />
      </Switch>
    </div>
  )
}
