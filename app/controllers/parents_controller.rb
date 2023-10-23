class ParentsController < ApplicationController
    skip_before_action :authorize , only: [:index, :create]
    
    def index 
        parents = Parent.all
        render json: parents, status: :ok
    end
     

    def show
        parent = Parent.find_by(id: params[:id])
        render json: parent, include: :children, status: :ok
    end

    def create 
        new_parent = Parent.create(parent_params) 
        render json: new_parent, status: :created
    end

    def update 
        parent = Parent.find(params[:id])
        parent.update(adult_params)
        render json: parent, status: :accepted
    end

    def destroy
        parent = Parent.find_by(id: params[:id])
        parent.destroy
        head :no_content
    end

    def my_children
        user = current_user.profileable
        render json: user.children, status: :ok
    end

    private

    def parent_params
        params.permit(:name, :image_url)
    end
end
