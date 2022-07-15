import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankEmployeeComponent } from './components/bank-employee/bank-employee.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { CustomerComponent } from './components/customer/customer.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { EmpexitComponent } from './components/empexit/empexit.component';
import { ExitComponent } from './components/exit/exit.component';
import { LoginComponent } from './components/login/login.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { VAllCustomerAccountsComponent } from './components/v-all-customer-accounts/v-all-customer-accounts.component';
import { VAllCustomersComponent } from './components/v-all-customers/v-all-customers.component';
import { VCustomerAccountsComponent } from './components/v-customer-accounts/v-customer-accounts.component';
import { VaccountsComponent } from './components/vaccounts/vaccounts.component';
import { VcustomerComponent } from './components/vcustomer/vcustomer.component';
import { VstatementsComponent } from './components/vstatements/vstatements.component';
import { VtransactionsComponent } from './components/vtransactions/vtransactions.component';
import { WarnComponent } from './components/warn/warn.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'warning', component: WarnComponent },
  { path: 'customer-portal', component: CustomerComponent },
  { path: 'employee-portal', component: BankEmployeeComponent },
  { path: 'account', component: VaccountsComponent },
  { path: 'deposit', component: DepositComponent },
  { path: 'withdraw', component: WithdrawComponent },
  { path: 'transfer', component: TransferComponent },
  { path: 'statements', component: VstatementsComponent },
  { path: 'transactions', component: VtransactionsComponent },
  { path: 'create-customer', component: CreateCustomerComponent },
  { path: 'customer', component: VcustomerComponent },
  { path: 'all-customers', component: VAllCustomersComponent },
  { path: 'customer-accounts', component: VCustomerAccountsComponent },
  { path: 'all-customer-accounts', component: VAllCustomerAccountsComponent },
  { path: 'logout', component: ExitComponent },
  { path: 'emp-logout', component: EmpexitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent, CustomerComponent, BankEmployeeComponent, VaccountsComponent,
  DepositComponent, WithdrawComponent, TransferComponent, VstatementsComponent, VtransactionsComponent,
  CreateCustomerComponent, VcustomerComponent, VAllCustomersComponent, VCustomerAccountsComponent, VAllCustomerAccountsComponent,
  ExitComponent, EmpexitComponent, WarnComponent]

