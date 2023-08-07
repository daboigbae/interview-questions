const expandAroundCenter = (s, left, right) => {
	while (left >= 0 && right < s.length && s[left] === s[right]) {
	  left--;
	  right++;
	}
	return right - left - 1;
  };
  
  const longestPalindrome = (s) => {
	if (s.length < 1 || s === null) return "";
  
	let start = 0;
	let end = 0;
  
	for (let i = 0; i < s.length; i++) {
	  let len1 = expandAroundCenter(s, i, i);
	  let len2 = expandAroundCenter(s, i, i + 1);
	  let len = Math.max(len1, len2);
  
	  if (len > end - start) {
		start = i - Math.floor((len - 1) / 2);
		end = i + Math.floor(len / 2);
	  }
	}
  
	return s.substring(start, end + 1);
  };
  
  console.log(longestPalindrome("babad")); // Outputs: "bab" or "aba"
  console.log(longestPalindrome("cbbd"));  // Outputs: "bb"
  