<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $language = $_POST['language'];
    $score = $_POST['score'];
    $totalQuestions = $_POST['totalQuestions'];
    $correctAnswers = $_POST['correctAnswers'];
    $incorrectAnswers = $_POST['incorrectAnswers'];
    
    // ��������� ��������� ��� ��������
    $to = "���_�����_�����@example.com";
    $subject = "���������� ����� �� ������ ����������������";
    $message = "���� ����������������: " . $language . "\n";
    $message .= "����� ����: " . $score . "\n";
    $message .= "����� ��������: " . $totalQuestions . "\n";
    $message .= "���������� �������: " . $correctAnswers . "\n";
    $message .= "������������ �������: " . $incorrectAnswers . "\n";
    
    // ���������� ���������
    $headers = "From: leone18d@gmail.com";
    if (mail($to, $subject, $message, $headers)) {
        echo "���������� ����� ���������� �� ���� �����.";
    } else {
        echo "������ ��� �������� ����������� �����.";
    }
} else {
    echo "������ �� ���� ���������� ������� POST.";
}
?>
