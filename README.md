# Customize Sport Apparel Store - Stylex
A online apparel store where you can customize your apparel with a picture or logo

## User Story
As a user, I want to be able to:
- Signup, Login, Logout
- Make an order
- Upload a picture
- Scale the picture, rotate, and placement
- Choose the type of apprarel they want to put the picture on, and the color.
- See their order history

## Routes

### Users

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | /sign-up               | users#signup      |
| POST   | /sign-in               | users#signin      |
| PATCH  | /change-password/      | users#changepw    |
| DELETE | /sign-out/             | users#signout     |

### Order

| Verb   | URI Pattern                   | Controller#Action |
|--------|-------------------------------|-------------------|
| GET    | /order/history                | order#create    |
| POST   | /order/create                 | order#create    |
| PATCH  | /order/:orderid/:update       | order#update    |
| DELETE | /order/:orderid/:delete       | order#delete    |