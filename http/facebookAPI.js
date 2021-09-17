import { $hostPost } from "./index"

export default class FacebookService {
    static async lognFacebook (accessToken, userID) {
        return $hostPost.post('facebookLogin', {accessToken: accessToken, userID: userID})
    }
}