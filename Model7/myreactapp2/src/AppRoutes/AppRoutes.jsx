// special component containing all the possible routes for this app
// any props passed into AppRoutes will also be passed onto 

import { Route, Routes } from "react-router-dom";
import BitcoinRatesExe2 from "../Components/BitcoinRatesExe2";

// child components using {...props}
function AppRoutes(props) {
   return (
      <Routes>
         {/* index matches on default/home URL: / */}
         <Route index element={<BitcoinRatesExe2 {...props} />} />
         {/* nested routes, matches on /dash/messages etc */}
         {/*<Route path="dash" element={<DashboardPage {...props} />}>
            <Route path="messages" element={<DashboardMessages />} 
/>
            <Route path="tasks" element={<DashboardTasks />} />
         </Route>
         <Route path='/about' element={<AboutPage {...props} />} />        
         {/* special route to handle if none of the above match
         <Route path="*" element={<PageNotFound />} />    */}         
      </Routes>
   )
}
export default AppRoutes;
// Name this file AppRoutes.jsx and store in new folder 'routes'