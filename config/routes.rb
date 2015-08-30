Rails.application.routes.draw do

  # authentication
  # scope '/api' do
  #   mount_devise_token_auth_for 'User', at: 'auth'
  #   resources :groups, except: [:new, :edit]
  # end

  get '/', to: redirect('/')

  namespace :api, defaults: {format: :json} do 
    mount_devise_token_auth_for 'User', at: 'auth'
    resources :groups, except: [:new, :edit]
    
    namespace :v1 do
      resources :lists
    end
  end

  mount API => '/api'

end
