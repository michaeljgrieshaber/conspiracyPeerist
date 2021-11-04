# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Post.destroy_all
User.destroy_all

@user1 = User.create!(username: 'mike1', email: 'mike1@email.com', password: '123456')
@user2 = User.create!(username: 'mike2', email: 'mike2@email.com', password: '123456')
@user3 = User.create!(username: 'mike3', email: 'mike3@email.com', password: '123456')
@user4 = User.create!(username: 'mike4', email: 'mike4@email.com', password: '123456')
@user5 = User.create!(username: 'mike5', email: 'mike5@email.com', password: '123456')
@user6 = User.create!(username: 'mike6', email: 'mike6@email.com', password: '123456')
@user7 = User.create!(username: 'mike7', email: 'mike7@email.com', password: '123456')
@user8 = User.create!(username: 'mike8', email: 'mike8@email.com', password: '123456')
@user9 = User.create!(username: 'mike9', email: 'mike9@email.com', password: '123456')
@user10 = User.create!(username: 'mike10', email: 'mike10@email.com', password: '123456')

puts "#{User.count} users created"

@post1 = Post.create!(title: 'Birds are not real', user_id: @user1.id)
@post2 = Post.create!(title: 'Area 51', user_id: @user1.id)
@post3 = Post.create!(title: 'Hollow Earth', user_id: @user1.id)
@post4 = Post.create!(title: 'Avril Lavigne is a robot', user_id: @user1.id)
@post5 = Post.create!(title: 'Bermuda Triangle', user_id: @user1.id)
@post6 = Post.create!(title: 'Aliens built the pyramids', user_id: @user1.id)
@post7 = Post.create!(title: 'Illuminati are real', user_id: @user1.id)
@post8 = Post.create!(title: 'The Titanic did not actually sink', user_id: @user1.id)

puts "#{Post.count} posts created"


@comment1 = Comment.create!(content: 'The earth is actually hallow and filled with crab people.', post_id: @post3.id, user_id: @user1.id)
@comment2 = Comment.create!(content: 'How can the earth be hollow if it’s flat?', post_id: @post3.id, user_id: @user2.id)
@comment3 = Comment.create!(content: 'Its not filled with crab people, it’s where the dinosaurs are hiding.', post_id: @post3.id, user_id: @user3.id)
@comment4 = Comment.create!(content: 'Yall are crazy', post_id: @post3.id, user_id: @user4.id)
@comment5 = Comment.create!(content: 'The earth goes hard', post_id: @post3.id, user_id: @user5.id)
@comment6 = Comment.create!(content: 'What are crab people?', post_id: @post3.id, user_id: @user6.id)

puts "#{Comment.count} comments created"

