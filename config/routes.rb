Customers::Application.routes.draw do
  resources :contacts do
    resources :notes
  end
  root :to => 'contacts#index'
end
