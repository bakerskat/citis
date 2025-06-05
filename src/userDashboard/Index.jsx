import { RouterProvider } from "react-router-dom";
import router from "./components/layouts/RouterLayouts";
import { Provider } from "react-redux";
import store from "./redux/app/store";
import AmountProvider from "./context/amount/AmountProvider";
import SavingsTransactionProvider from "./context/savingsTransactions/SavingsTransactionProvider";
import ExistPlanProvider from "./context/existPlan/ExistPlanProvider";
import AuthProvider from "./context/auth/AuthProvider";
import GeneralValueProvider from "./context/generalValue/GeneralValueProvider";

const Index = () => {
  return (
    <div>
      <Provider store={store}>
        <AmountProvider>
          <SavingsTransactionProvider>
            <ExistPlanProvider>
              <AuthProvider>
                <GeneralValueProvider>
                  <RouterProvider router={router} />
                </GeneralValueProvider>
              </AuthProvider>
            </ExistPlanProvider>
          </SavingsTransactionProvider>
        </AmountProvider>
      </Provider>
    </div>
  );
};

export default Index;
