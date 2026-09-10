function solution(nums) {
    const kinds = new Set(nums);

    return Math.min(kinds.size, nums.length/2)
}