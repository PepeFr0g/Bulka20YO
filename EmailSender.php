<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $language = $_POST['language'];
    $score = $_POST['score'];
    $totalQuestions = $_POST['totalQuestions'];
    $correctAnswers = $_POST['correctAnswers'];
    $incorrectAnswers = $_POST['incorrectAnswers'];
    
    // Формируем сообщение для отправки
    $to = "ваш_адрес_почты@example.com";
    $subject = "Результаты теста на знание программирования";
    $message = "Язык программирования: " . $language . "\n";
    $message .= "Общий счет: " . $score . "\n";
    $message .= "Всего вопросов: " . $totalQuestions . "\n";
    $message .= "Правильных ответов: " . $correctAnswers . "\n";
    $message .= "Неправильных ответов: " . $incorrectAnswers . "\n";
    
    // Отправляем сообщение
    $headers = "From: leone18d@gmail.com";
    if (mail($to, $subject, $message, $headers)) {
        echo "Результаты теста отправлены на вашу почту.";
    } else {
        echo "Ошибка при отправке результатов теста.";
    }
} else {
    echo "Данные не были отправлены методом POST.";
}
?>
