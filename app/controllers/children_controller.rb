class ChildrenController < ApplicationController
    skip_before_action :authorize , only: :create

    def index 
        kids = Child.all
        render json: kids, status: :ok
    end

    def show
        child = Child.find(params[:id])
        render json: child, status: :ok
    end

    def create 
        user = current_user
        if user.profileable_type == "Parent"
          new_child = user.children.create!(child_params)
        else
          new_child = Child.create!(child_params)
        session[:id] = new_child.id
        render json: new_child, status: :created
        end
    end

    def update 
        child = Child.find(params[:id])
        child.update(child_params)
        render json: child, status: :accepted
    end

    def destroy
        child = Child.find_by(id: params[:id])
        child.destroy
        head :no_content
    end


    private

    def child_params
        params.permit(:parent_id, :name, :image_url, :rewards)
    end


end
