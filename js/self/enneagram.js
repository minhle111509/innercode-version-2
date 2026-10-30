/**
 * Short self-reflection quiz inspired by the Enneagram's nine types.
 * Not a validated psychometric instrument; results are for self-reflection only.
 */

export const SCALE = [
  { value: 1, label: 'Hoàn toàn không đúng' },
  { value: 2, label: 'Ít đúng' },
  { value: 3, label: 'Phân vân' },
  { value: 4, label: 'Khá đúng' },
  { value: 5, label: 'Rất đúng' },
];

export const TYPES = {
  1: { name: 'Người Cầu Toàn', desire: 'Sống đúng, tốt và chính trực', fear: 'Mắc sai lầm, bị coi là không tốt', strengths: 'Có nguyên tắc, trách nhiệm, tận tâm', growth: 'Chấp nhận sự không hoàn hảo; cho phép bản thân nghỉ ngơi và vui chơi.', career: 'Kiểm định chất lượng, kế toán, luật, biên tập, giáo dục, công việc cần chuẩn mực.', love: 'Chung thủy, có trách nhiệm; bớt sửa lỗi người kia và khen nhiều hơn.', practice: 'Mỗi ngày dành 15 phút làm điều vui mà không cần làm cho đúng.', integration: 7, stress: 4 },
  2: { name: 'Người Giúp Đỡ', desire: 'Được yêu thương và được cần đến', fear: 'Không được yêu thương', strengths: 'Ấm áp, chu đáo, hào phóng', growth: 'Nhận ra nhu cầu của chính mình; cho đi mà không chờ đáp lại.', career: 'Y tế, giáo dục, nhân sự, chăm sóc khách hàng, công tác xã hội.', love: 'Tận tụy, ấm áp; nói rõ nhu cầu của mình thay vì chỉ cho đi.', practice: 'Mỗi ngày tự hỏi: hôm nay mình cần gì? rồi làm một điều cho mình.', integration: 4, stress: 8 },
  3: { name: 'Người Thành Đạt', desire: 'Có giá trị và thành công', fear: 'Thất bại, trở nên vô dụng', strengths: 'Tham vọng, hiệu quả, truyền cảm hứng', growth: 'Sống thật với cảm xúc; giá trị của bạn không chỉ nằm ở thành tích.', career: 'Kinh doanh, bán hàng, marketing, quản lý, khởi nghiệp.', love: 'Cuốn hút, chu đáo; cần dành thời gian thật cho người thương, không chỉ thành tích.', practice: 'Mỗi tuần một buổi tối không làm việc, không mạng xã hội.', integration: 6, stress: 9 },
  4: { name: 'Người Cá Tính', desire: 'Tìm ra bản sắc riêng', fear: 'Trở nên tầm thường, không có bản sắc', strengths: 'Sáng tạo, sâu sắc, chân thật', growth: 'Trân trọng điều mình đang có; biến cảm xúc thành hành động cụ thể.', career: 'Nghệ thuật, thiết kế, viết lách, tư vấn tâm lý, nghề sáng tạo.', love: 'Sâu sắc, lãng mạn; tránh lý tưởng hóa rồi thất vọng.', practice: 'Mỗi ngày ghi 3 điều biết ơn và làm một việc nhỏ từ cảm hứng.', integration: 1, stress: 2 },
  5: { name: 'Nhà Quan Sát', desire: 'Hiểu biết và có năng lực', fear: 'Bất lực, bị xâm phạm không gian riêng', strengths: 'Thông minh, độc lập, khách quan', growth: 'Bước ra hành động và chia sẻ; kết nối nhiều hơn với cơ thể và cảm xúc.', career: 'Nghiên cứu, công nghệ, phân tích dữ liệu, kỹ thuật, chuyên gia.', love: 'Trung thành, cần không gian riêng; chủ động chia sẻ cảm xúc.', practice: 'Mỗi tuần gặp gỡ hoặc gọi điện cho một người bạn.', integration: 8, stress: 7 },
  6: { name: 'Người Trung Thành', desire: 'An toàn và có chỗ dựa', fear: 'Bị bỏ rơi, không có ai hỗ trợ', strengths: 'Trách nhiệm, tận tụy, chuẩn bị chu đáo', growth: 'Tin vào phán đoán của chính mình; nỗi lo chưa phải là sự thật.', career: 'Hành chính, quản lý rủi ro, an ninh, kế toán, công việc ổn định.', love: 'Chung thủy, đáng tin; học cách tin tưởng thay vì kiểm tra.', practice: 'Khi lo lắng, viết ra nỗi lo và một bằng chứng cho thấy nó có thể không xảy ra.', integration: 9, stress: 3 },
  7: { name: 'Người Nhiệt Huyết', desire: 'Hạnh phúc, tự do, trải nghiệm trọn vẹn', fear: 'Đau khổ, bị thiếu thốn', strengths: 'Lạc quan, đa tài, vui vẻ', growth: 'Ở lại với hiện tại kể cả khi khó chịu; hoàn thành việc cũ trước khi bắt đầu việc mới.', career: 'Du lịch, sự kiện, truyền thông, sáng tạo nội dung, khởi nghiệp.', love: 'Vui vẻ, nhiều năng lượng; cần ở lại cả lúc mối quan hệ khó khăn.', practice: 'Hoàn thành một việc đang dở trước khi bắt đầu việc mới.', integration: 5, stress: 1 },
  8: { name: 'Người Thách Thức', desire: 'Tự chủ và bảo vệ bản thân', fear: 'Bị kiểm soát hoặc tổn thương', strengths: 'Mạnh mẽ, quyết đoán, che chở', growth: 'Cho phép mình mềm yếu; sức mạnh thật có cả sự dịu dàng.', career: 'Lãnh đạo, kinh doanh, luật, quản lý dự án, công việc cần bản lĩnh.', love: 'Che chở, thẳng thắn; cho phép mình dịu dàng và lắng nghe.', practice: 'Mỗi ngày hỏi ý kiến một người trước khi quyết định.', integration: 2, stress: 5 },
  9: { name: 'Người Hòa Giải', desire: 'Bình yên trong lòng và xung quanh', fear: 'Mất kết nối, xung đột', strengths: 'Điềm tĩnh, bao dung, biết lắng nghe', growth: 'Lên tiếng cho mong muốn của mình; ưu tiên việc quan trọng thay vì việc dễ.', career: 'Hòa giải, tư vấn, nhân sự, giáo dục, chăm sóc sức khỏe.', love: 'Bao dung, dễ chịu; dám nói ra mong muốn thật của mình.', practice: 'Mỗi sáng chọn một việc quan trọng nhất và làm nó trước.', integration: 3, stress: 6 },
};

const STATEMENTS_BY_TYPE = {
  1: ['Tôi thường để ý ngay những chỗ chưa đúng hoặc chưa hoàn hảo.', 'Tôi đặt tiêu chuẩn cao cho bản thân và khó chấp nhận sai sót.', 'Tôi tin có một cách đúng để làm mọi việc và muốn làm theo nó.', 'Tôi hay tự phê bình mình trong đầu.'],
  2: ['Tôi thấy vui khi được giúp đỡ và được người khác cần đến.', 'Tôi dễ nhận ra người khác cần gì trước cả khi họ nói.', 'Tôi khó từ chối khi có người nhờ vả.', 'Tôi đôi khi quên nhu cầu của mình vì lo cho người khác.'],
  3: ['Tôi có động lực mạnh để thành công và được công nhận.', 'Tôi giỏi điều chỉnh hình ảnh của mình cho hợp từng môi trường.', 'Tôi thấy khó chịu khi làm việc thiếu hiệu quả.', 'Tôi hay đo giá trị bản thân bằng thành tích đạt được.'],
  4: ['Tôi cảm thấy mình khác biệt so với phần đông mọi người.', 'Cảm xúc của tôi sâu sắc và thay đổi mạnh.', 'Tôi bị thu hút bởi cái đẹp, nghệ thuật và sự độc đáo.', 'Tôi hay cảm thấy thiếu một điều gì đó mà người khác có.'],
  5: ['Tôi cần nhiều thời gian một mình để nạp lại năng lượng.', 'Tôi thích tìm hiểu thật sâu một chủ đề trước khi hành động.', 'Tôi giữ cảm xúc cho riêng mình, quan sát nhiều hơn tham gia.', 'Tôi tiết kiệm thời gian, sức lực và không thích bị đòi hỏi quá nhiều.'],
  6: ['Tôi hay nghĩ trước những rủi ro có thể xảy ra.', 'Tôi coi trọng sự trung thành và an toàn trong các mối quan hệ.', 'Tôi cần được bảo đảm trước khi ra quyết định quan trọng.', 'Tôi vừa tin vừa nghi ngờ những người có quyền lực.'],
  7: ['Tôi luôn có nhiều kế hoạch và ý tưởng thú vị.', 'Tôi không chịu được cảm giác bị gò bó hoặc nhàm chán.', 'Tôi thường tìm mặt tích cực để tránh cảm xúc khó chịu.', 'Tôi thích trải nghiệm mới hơn là đi sâu vào một việc quá lâu.'],
  8: ['Tôi nói thẳng và không ngại đối đầu.', 'Tôi muốn tự mình kiểm soát cuộc sống của mình.', 'Tôi bảo vệ người yếu thế và ghét sự bất công.', 'Tôi ít khi để người khác thấy mặt yếu đuối của mình.'],
  9: ['Tôi thích sự yên bình và tránh xung đột.', 'Tôi dễ nhìn thấy quan điểm của mọi phía.', 'Tôi hay trì hoãn những việc quan trọng với bản thân.', 'Tôi dễ hòa theo mong muốn của người khác.'],
};

/** Statements interleaved across types so the same type never appears twice in a row. */
export const STATEMENTS = [0, 1, 2, 3].flatMap((round) =>
  Object.entries(STATEMENTS_BY_TYPE).map(([type, list]) => ({
    id: `t${type}-${round}`,
    type: Number(type),
    text: list[round],
  })));

const neighbours = (type) => [type === 1 ? 9 : type - 1, type === 9 ? 1 : type + 1];

/**
 * @param {Record<string, number>} answers statement id → 1..5
 * @returns ranked type scores (0–100), main type and wing
 */
export function scoreQuiz(answers) {
  const unanswered = STATEMENTS.filter((s) => ![1, 2, 3, 4, 5].includes(Number(answers[s.id])));
  if (unanswered.length) {
    throw new Error(`Bạn còn ${unanswered.length} câu chưa trả lời.`);
  }

  const raw = Object.fromEntries(Object.keys(TYPES).map((t) => [t, 0]));
  for (const s of STATEMENTS) raw[s.type] += Number(answers[s.id]);

  const perType = STATEMENTS.length / 9;
  const scores = Object.entries(raw).map(([type, sum]) => ({
    type: Number(type),
    percent: Math.round(((sum - perType) / (perType * 4)) * 100),
  }));
  // Stable ranking: higher score first, lower type number breaks ties.
  const ranked = [...scores].sort((a, b) => b.percent - a.percent || a.type - b.type);
  const main = ranked[0].type;
  const [left, right] = neighbours(main);
  const byType = Object.fromEntries(scores.map((s) => [s.type, s.percent]));
  const wing = byType[left] >= byType[right] ? left : right;
  return { ranked, main, wing, scores: byType };
}
