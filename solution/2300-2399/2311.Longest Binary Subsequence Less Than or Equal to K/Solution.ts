function longestSubsequence(s: string, k: number): number {
    let ans = 0;
    for (let i = s.length - 1, v = 0; ~i; --i) {
        if (s[i] == '0') {
            ++ans;
        } else if (ans < 30 && (v | (1 << ans)) <= k) {
            v |= 1 << ans;
            ++ans;
        }
    }
    return ans;
}
