Rails.application.routes.draw do
  root 'planning#show'
  get 'courses', to: 'courses#index'
  get 'courses/new', to: 'courses#new'
  get 'student/new', to: 'student#new'
  get 'students/new', to: 'students#new'
  get 'about', to: 'pages#about'
  resources :students, except: [:destroy]

  get 'login', to:'logins#new'
  post 'login', to:'logins#create'
  delete 'logout', to: 'logins#destroy'
  post 'course_enroll', to: 'student_courses#create'
end
